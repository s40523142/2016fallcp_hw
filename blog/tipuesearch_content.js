var tipuesearch = {"pages":[{"text":"2016Fall 修課成員網誌","tags":"misc","title":"About","url":"./pages/about/"},{"text":"來啊~~PK~~啊~~ window.onload=function(){ brython(1); } from browser import document from browser import html #coding: utf-8 # 猜數字遊戲 import random 標準答案 = random.randint(1, 100) 你猜的數字 = int(input(\"請輸入您所猜的整數:\")) 猜測次數 = 1 while 標準答案 != 你猜的數字: if 標準答案 < 你猜的數字: print(\"太大了，再猜一次 :)加油\") else: print(\"太小了，再猜一次 :)加油\") 你猜的數字 = int(input(\"請輸入您所猜的整數:\")) 猜測次數 += 1 print(\"猜對了！總共猜了\", 猜測次數, \"次\")","tags":"Misc","title":"Week 16 猜數字 Brython","url":"./week-16-cai-shu-zi-brython.html"},{"text":"新年快樂 HA~HA~HA~ window.onload=function(){ brython(1); } from browser import document from browser import html import random print_location = document[\"newyear\"] def gen_int(): num = random.randint(1, 49) # 設法將 num 列印在網頁上 #print_location = document[\"newyear\"] print_location <= num + html.BR() def lottery(e): for i in range(6): gen_int() print_location <= \"恭喜中獎!!!快去簽樂透\" + html.BR() #document[\"but1\"].bind(\"click\", gen_int) document[\"but1\"].bind(\"click\", lottery) 帶來希望與夢想的按鈕 from browser import document from browser import html import random print_location = document[\"newyear\"] def gen_int(): num = random.randint(1, 49) # 設法將 num 列印在網頁上 #print_location = document[\"newyear\"] print_location <= num + html.BR() def lottery(e): for i in range(6): gen_int() print_location <= \"恭喜中獎!!!快去簽樂透\" + html.BR() #document[\"but1\"].bind(\"click\", gen_int) document[\"but1\"].bind(\"click\", lottery) 帶來希望與夢想的按鈕","tags":"Misc","title":"Week 16 Brython","url":"./week-16-brython.html"},{"text":"聖誕快樂HO~HO~HO~ window.onload=function(){ brython(1); } from browser import document as do from browser import html c = do[\"con\"] def compa(e): your_input = input(\"請輸入一個整數!\") # 如何判斷所輸入的整數比 10 大 if int(your_input) > 10: c <= \"所輸入的整數:\" + your_input + \"比 10 大\" + html.BR() else: c <= \"所輸入的整數:\" + your_input + \"比 10 小\" + html.BR() #print(\"test\") ''' for i in range(5): c <= \"test\" + html.BR() ''' do[\"b1\"].bind(\"click\", compa) hahahahahahahahahahaha from browser import document as do from browser import html c = do[\"con\"] def compa(e): your_input = input(\"請輸入一個整數!\") # 如何判斷所輸入的整數比 10 大 if int(your_input) > 10: c <= \"所輸入的整數:\" + your_input + \"比 10 大\" + html.BR() else: c <= \"所輸入的整數:\" + your_input + \"比 10 小\" + html.BR() #print(\"test\") ''' for i in range(5): c <= \"test\" + html.BR() ''' do[\"b1\"].bind(\"click\", compa) hahahahahahahahahahaha","tags":"Misc","title":"Week 15 Brython","url":"./week-15-brython.html"},{"text":"上課不要玩手機 window.onload=function(){ brython(1); } from browser import document from browser import alert def get_input(ev): the_input= input(\"請輸入\") print(\"輸入為:\"+str(the_input)) document['ch01'].bind('click',get_input) 40523142 from browser import document from browser import alert def get_input(ev): the_input= input(\"請輸入\") alert(\"輸入為:\"+str(the_input)) document['ch01'].bind('click',get_input) 40523142","tags":"Misc","title":"Week 14","url":"./week-14.html"},{"text":"繪製吉他和弦 繪圖流程, 導入程式庫, 啟動, 然後引用各種模組開始繪圖 window.onload=function(){ brython(1); } from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"chord1\"] ctx = canvas.getContext(\"2d\") def background(x, y, xinc, yinc, xnum, ynum, ctx): # 水平線 for i in range(ynum+1): ctx.beginPath() # 設定線的寬度為 1 個單位 if i == 0: ctx.lineWidth = 7 else: ctx.lineWidth = 1 ctx.moveTo(x-1, y+i*yinc) ctx.lineTo(x+xnum*xinc+1, y+i*yinc) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() # 垂直線 for i in range(xnum+1): ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 ctx.moveTo(x+i*xinc, y) ctx.lineTo(x+i*xinc, y+ynum*yinc) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() def canvasText(x, y, fontSize, string, sup, sub, color, ctx): # 標定各弦音符號, 以及把位編號 ctx.beginPath() ctx.fillStyle = color ctx.strokeStyle = color #ctx.font = \"20px Arial\" ctx.font = str(fontSize)+ \"px Arial\" ctx.fillText(string, x, y) ctx.font = str(fontSize-8)+ \"px Arial\" if sup != \"\": ctx.fillText(sup, x+fontSize/1.6, y-fontSize/2) if sub != \"\": ctx.fillText(sup, x+fontSize/1.6, y) ctx.fill() ctx.stroke() ctx.closePath() w = 20 h = 30 background(100, 100, w, h, 5, 5, ctx) canvasText(100, 80, 20, \"A\", \"b\", \"\", \"black\", ctx)","tags":"Misc","title":"Week 12 Brython 繪圖範例","url":"./week-12-brython-hui-tu-fan-li.html"},{"text":"畫直線 繪圖流程, 導入程式庫, 啟動, 然後引用各種模組開始繪圖 window.onload=function(){ brython(1); } from browser import document as doc import math canvas = doc[\"japanflag1\"] ctx = canvas.getContext(\"2d\") ctx.beginPath() ctx.lineWidth = 1 inc = 5 for i in range(10): ctx.moveTo(100+i*10, 100) ctx.lineTo(100+i*10, 200) ctx.moveTo(100, 100) ctx.lineTo(150, 100) ctx.moveTo(150, 100) ctx.lineTo(150, 200) ctx.moveTo(150, 200) ctx.lineTo(100, 200) ctx.moveTo(100, 200) ctx.lineTo(100, 100) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath()","tags":"Misc","title":"Week 10 Brython 繪圖範例","url":"./week-10-brython-hui-tu-fan-li.html"},{"text":"s40523142 超神網誌！！！ 這裡是學員s40523142第一次做的網誌 請多多見諒!!! 這個課程讓我感到非常神奇 因為以前我都不會碰到這些東西 現在知道電腦的\"命令提示字元\"可以幫助自己查到電腦的很多資訊 以及 執行一些人類自己做起來可能會花很久的事 之後的課程我一樣會好好的學習 就醬子~~~","tags":"Misc","title":"學員 s40523142  網誌","url":"./xue-yuan-s40523142-wang-zhi.html"},{"text":"知識管理與最佳化應用實驗室試圖利用計算機程式、網際內容管理、電腦輔助設計實習與協同產品設計實習等課程, 進行與機械設計相關的主題式教學, 其中包含強化創造力的教學、令學員熟習六種工程表達方式, 並且俱備融入協同設計所需要的四大面向知識與技能. 機械設計主題教學 創造力三元素, 機械設計的六種表達, 協同設計的四大面向. 強化創造能力 - 自學力、程式力與想像力 (Creative Competencies) 熟習六種表達 - 口語、文字、2D、3D、理論與實體表達 (Six Presentation Methods) 融入協同設計 - 電腦、網路、軟硬體工具與協同專案 (Collaborative Designs)","tags":"Misc","title":"2016Fall 機械設計主題教學 這老師的網誌的東西","url":"./2016fall-ji-jie-she-ji-zhu-ti-jiao-xue-zhe-lao-shi-de-wang-zhi-de-dong-xi.html"}]};