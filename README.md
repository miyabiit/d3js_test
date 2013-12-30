d3js_test
=========

sample/dot-installxx
----

D3.js training , learning and some sample.

sample_gis 行政区データを使って白地図を表示
----

ネタはここから

[神奈川の地図](http://qiita.com/sawamur@github/items/ec32237bcbaaba94108d)

国土交通省のGISへの取り組みは、__すごい__。

[国土数値情報　行政区域データ](http://nlftp.mlit.go.jp/ksj/gml/datalist/KsjTmplt-N03.html)

1. シェイプデータ .shp を取得（上記）テストでは、千葉のデータを利用した

```
BALLOONGA:sample_gis baker$ ls -l ~/Downloads/N03-130401_12_GML/
total 16832
-rw-rw-rw-@ 1 baker  staff    13950  8 21  2012 KS-META-N03-13_12_130401.xml
-rw-rw-rw-@ 1 baker  staff    77030  7 31  2012 N03-13_12_130401.dbf
-rw-rw-rw-@ 1 baker  staff     9572  9  3  2012 N03-13_12_130401.sbn
-rw-rw-rw-@ 1 baker  staff      468  9  3  2012 N03-13_12_130401.sbx
-rw-rw-rw-@ 1 baker  staff  2737604  7 31  2012 N03-13_12_130401.shp
-rw-rw-rw-@ 1 baker  staff     8188  7 31  2012 N03-13_12_130401.shx
-rw-rw-rw-@ 1 baker  staff  5758569  7 31  2012 N03-13_12_130401.xml
```

2. GeoJSON形式に変換することにする
3. 変換ツールをインストール　`$ brew install gdal`

(これは、compileもので、ずいぶんと時間がかかった)

4. 変換 `$ ogr2ogr -f GeoJSON kanagawa.json N03-13_14_130401.shp`

注) ダウンロードした全てのファイル（定義ファイル）が必要。


