import requests
import os
import json

url = "https://pokeapi.co/api/v2/pokemon/"

print('ポケモン図鑑番号を入れてください')
# 入力文字を取得
poke_id = input('>> ')
# poke_id = '120'

# バリデーションチェック
while True:
    # 範囲は1〜905 (2022/10現在)
    judge = 0 <= int(poke_id) < 906

    if not judge:
        # 存在しないIDを記述したら、再入力を求める
        print('存在しないポケモンIDを入力しています！再度入力してください。')
        poke_id = input('>> ')

    else:
        # 正しければループを抜ける
        break

# urlに図鑑IDを付与
url = url + poke_id

response = requests.get(url)
response = response.json()

# 名前
name = response['name']
# ID
id = response['id']
# ポケモン画像
image = response['sprites']['front_default']
# タイプ
types = response['types'][0]['type']['name']


print(id)
print(name)
print(image)
print(types)

file_name = 'raw_data.json'
existence_check = os.path.isfile(file_name)
if existence_check:
    raw_data = open(file_name, 'w')
else:
    raw_data = open(file_name, 'x')

data = json.dumps(response)
# print(data)
raw_data.writelines(data)
# json.dump(data, file_name)
raw_data.close()
