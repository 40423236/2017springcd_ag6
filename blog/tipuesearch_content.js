var tipuesearch = {"pages":[{"title":"About","url":"./pages/about/","tags":"misc","text":"2017Spring 機械設計工程系協同產品設計實習 課程倉儲: http://github.com/mdecourse/2017springcd 課程投影片: http://mdecourse.github.io/2017springcd 課程網誌: http://mdecourse.github.io/2017springcd/blog"},{"title":"2017/04/19 W9","url":"./Week 9.html","tags":"Course","text":"參考的網際程式如下: window.onload=function(){ brython(1); } from browser import document as doc from browser import html import math # 準備繪圖畫布 canvas = doc[\"fourbar_40123158\"] ctx = canvas.getContext(\"2d\") fourbar_data = open(\"./../40123158/data/midterm1.csv\").read() fourbar_list = fourbar_data.splitlines() # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 利用 transform 將 y 座標反轉, 且 offset canvas.height # (X scale, X skew, Y skew, Y scale, X offset, Y offset) # 配合圖形位置進行座標轉換 ctx.transform(1, 0, 0, -1, canvas.width/2+250, canvas.height/2+100) # 畫出 x 與 y 座標線 # 各座標值放大 3 倍 ratio = 3 ctx.moveTo(0, 0) ctx.lineTo(-30*ratio, 0) start_point = fourbar_list[0].split(\",\") ctx.moveTo(float(start_point[0])*ratio, float(start_point[1])*ratio) count = 0 for data in fourbar_list[1:]: point = data.split(\",\") #count = count + 1 #container1 <= str(count) + \":\" + point[0] + \",\" + point[1] #container1 <= html.BR() ctx.lineTo(float(point[0])*ratio, float(point[1])*ratio) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() 40423205 影片 40423210 影片 40423232 影片 40423235 影片 40423236 影片 40423237 影片 404232346 影片 Fourbar 行走機構 期中行走機構 from 40423246 on Vimeo ."},{"title":"2017/04/12 W8","url":"./Week 8.html","tags":"Course","text":"期中自評成績 個人自評: http://mde1a2.kmol.info:8000/k96tgzh1ofbl 小組互評: https://pygroup-ag100.rhcloud.com"},{"title":"2017/04/05 W7","url":"./Week 7.html","tags":"Course","text":"組立八連桿機構(solvespace) 组立八連桿機構 from 40423210 on Vimeo . 將八連桿匯入v-rep並加入馬達 八連桿機構轉入v-rep加馬達 from 40423210 on Vimeo ."},{"title":"2017/03/29 W6","url":"./Week 6.html","tags":"Course","text":"多連桿轉入v-rep 四連桿轉入v-rep from 40423210 on Vimeo ."},{"title":"2017/03/22 W5","url":"./Week 5.html","tags":"Course","text":"solvespace匯入v-rep加馬達 solvespace匯入v-rep加馬達 from 40423210 on Vimeo ."},{"title":"2017/03/15 W4","url":"./Week 4.html","tags":"Course","text":"單連桿機構轉入v-rep(onshape) 單連桿機構轉入v-rep(onshape) from 40423210 on Vimeo . 單連桿機構轉入v-rep(solvespace) 單連桿機構轉入v-rep(solvespace) from 40423210 on Vimeo ."},{"title":"2017/03/08  W3","url":"./Week 3.html","tags":"Course","text":"HyperWorks 14.0 Student Edition Student Edition: Download Now! 14-5影片-中英對照 近端 Fossil 1. 更改 Start.bat 設定 REM tiny2017 主要針對初學 Python3 與 C 學員所建立 REM 近端使用 fossil 管理資料版本, 並且定時轉為 git 格式後上傳到 github @echo off REM 設定 y 硬碟代號與 data 目錄對應 set Disk=y subst %Disk%: \"data\" REM 設定 leo 相關對應 Home 位置 set HomePath=%Disk%:\\home set HomeDrive=%Disk%:\\home set Home=%Disk%:\\home REM 將系統 Python 程式的 io 設為 utf-8 set PYTHONIOENCODING=\"utf-8\" REM 將後續的指令執行, 以 %Disk% 為主 %Disk%: REM 設定 PYTHONPATH set PYTHONPATH=%Disk%:\\python-3.5.3-embed-amd64 REM 設定 Leo 所用的編輯器 set LEO_EDITOR=%Disk%:\\wscite\\SciTE.exe REM for fossil https 連線設定 set HTTPS=on REM 指令搜尋路徑設定 set path1=%PATH%;%Disk%:;%Disk%:\\python-3.5.3-embed-amd64;%Disk%:\\git\\bin;%Disk%:\\stunnel\\bin;%Disk%:\\sqlite-tools;%Disk%:\\python-3.5.3-embed-amd64\\Scripts;%Disk%:\\portablegit\\bin; set path2=c:\\Windows\\Microsoft.NET\\Framework\\v3.5;%Disk%:\\python-3.5.3-embed-amd64\\Lib\\site-packages; path=%path%;%path1%;%path2% start /MIN %Disk%:\\wscite\\SciTE.exe start /MIN cmd.exe start /MIN cmd.exe start /MIN cmd.exe REM 啟動 Leo 編輯器 REM %Disk%:\\Miniconda3\\python.exe %Disk%:\\apps\\launchLeo.py REM 啟動 stunnel start /MIN fossil.exe server -P 127.0.0.1:8080 %Disk%:\\tmp\\fossil_repo\\2017springcd_hw.fpssil REM 取得電腦 IP, 然後設定 %Disk%:/stunnel/config/stunnel.conf for /f \"delims=[] tokens=2\" %%a in ('ping -4 -n 1 %ComputerName% &#94;| findstr [') do set NetworkIP=%%a REM echo Network IP: %NetworkIP% REM Saved in %Disk%:\\stunnel\\config\\stunnel.conf @echo off REM 建立 stunnel.conf @echo [https] > %Disk%:\\stunnel\\config\\stunnel.conf REM 附加資料 @echo accept = %NetworkIP%:443 >> %Disk%:\\stunnel\\config\\stunnel.conf @echo connect = 127.0.0.1:8080 >> %Disk%:\\stunnel\\config\\stunnel.conf @echo TIMEOUTclose = 0 >> %Disk%:\\stunnel\\config\\stunnel.conf @echo cert = %Disk%:\\stunnel\\config\\localhost.crt >> %Disk%:\\stunnel\\config\\stunnel.conf @echo key = %Disk%:\\stunnel\\config\\localhost.key >> %Disk%:\\stunnel\\config\\stunnel.conf REM 啟動 stunnel start /MIN stunnel.exe Exit 2. 在tmp裏的 fossil_repo 目錄執行指令 fossil init 2017springcd_hw.fpssil 3. 查詢 IP ipconfig /all 4. 確認是否有用 Proxy , 若有則需要將自己的IP設為例外 5. 使用瀏覽器輸入網址 https:// 電腦IPv4的IP 繪製四連桿機構 solvespace Link30 Link50 Link60 fourbar onshape Link30 Link50 Link60 fourbar"},{"title":"2017/03/01  W2","url":"./Week 2.html","tags":"Course","text":"W2 本週實習任務 import os adata = open(\"w2b_cadlab.txt\", encoding=\"utf-8\").read() rdata = open(\"w2b_registered.txt\", encoding=\"utf-8\").read().splitlines() print(adata) alist = adata.splitlines() print(alist[2]) n = 0 row = 0 final_list = [] w2_list = [] for stud_num in alist[2:]: row = row + 1 blist = stud_num.split(\"\\t\") #print(blist) column = 0 for i in range(len(blist)): column = column + 1 if blist[i] != \"\": #print(blist[i]) clist = blist[i].split(\" \") stud_data = clist[0]+\" \"+clist[1]+\" \"+str(row)+\" \"+str(column) final_list.append(stud_data) w2_list.append(clist[1]) n = n +1 根據數列前導字串排序, 目的在建立分組數列 group_list = sorted(final_list) print(\"分組名單:\") for i in range(len(group_list)): print(group_list[i]) print(\"座位列表:\") for i in range(len(final_list)): print(final_list[i]) for i in range(len(rdata)): if rdata[i] not in w2_list: print(\"缺席學生:\", rdata[i]) print(\"學生總數:\", n) print(os.environ) 觀察四連桿運動方式 from 40423210 on Vimeo . Stunnel的設定 設定stunnel.conf from NFU-MDE-104B-40423236 on Vimeo ."}]};