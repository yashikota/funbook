# 概要

# API共通
## ステータスコード

下記のコードを返却する。

| ステータスコード | 説明 |
| - | - |
| 200 | リクエスト成功 |
| 201 | 登録成功 |
| 204 | リクエストに成功したが返却するbodyが存在しない |
| 400 | 不正なリクエストパラメータを指定している |
| 401 | APIアクセストークンが不正、または権限不正 |
| 404 | 存在しないURLにアクセス |
| 429 | リクエスト制限を超えている |
| 500 | 不明なエラー |

# FUNBOOK-API

## あいまい検索

```
POST /api/fb/v1/search/ambiguous HTTP/1.1
```

### Request

| パラメータ | 内容 | 必須 | デフォルト値 |
|  ---  |  ---  |  ---  |  ---  |
| language | 言語指定 | 〇 | python |
| search |  検索文  | 〇 | - |

```
{
    "language" : "検索関数",
    "search" : "検索文",
}
```

### Response

```
HTTP/1.1 200 OK
{
    "function" : "検索結果　関数でない場合はnone",
    "param" : "引数ない場合はnone"
    "source" : "例ソースコード",
    "overview" : "概要"
}
```

## 通常検索

```
POST /api/fb/v1/search HTTP/1.1
```

### Request

| パラメータ | 内容 | 必須 | デフォルト値 |
|  ---  |  ---  |  ---  |  ---  |
| language | 言語指定 | 〇 | python |
| search |  検索文  | 〇 | - |

```
{
    "language" : "検索関数",
    "search" : "検索文",
}
```

### Response

```
HTTP/1.1 200 OK
{
    "param" : "引数　ない場合はnone",
    "return" : "返り値",
    "overview" : "概要"
}
```

## 検索ランキング

```
POST /api/fb/v1/search/ranking HTTP/1.1
```

### Request

| パラメータ | 内容 | 必須 | デフォルト値 |
|  ---  |  ---  |  ---  |  ---  |
| language | 言語指定 | 〇 | python |

```
{
    "language" : "ランキング検索言語"
}
```

### Response

```
HTTP/1.1 200 OK
{
    "ranking" : {
        "function" : "関数名",
        "overview" : "概要"
    }
}
```

