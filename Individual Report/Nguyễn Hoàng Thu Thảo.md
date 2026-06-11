# **Nguyễn Hoàng Thu Thảo – 2312380035**

## **Vai trò trong dự án**

Trong dự án FinGuide, em phụ trách xây dựng input kiến thức cốt lõi, bao gồm dữ liệu nghề nghiệp, khung logic đánh giá và nội dung giải thích kết quả, nhằm kết nối đầu vào từ bài đánh giá tính cách với đầu ra là các khuyến nghị nghề nghiệp cá nhân hóa cho người dùng.

## **Dấu ấn cá nhân trong sản phẩm**

Dấu ấn cá nhân lớn nhất của em nằm ở phần cơ sở dữ liệu nghề nghiệp và nội dung tư vấn nghề nghiệp của FinGuide.

Cụ thể, em là người xây dựng:

* Bộ dữ liệu nghiên cứu 16 nhóm nghề nghiệp trong lĩnh vực Tài chính – Ngân hàng.  
* Career Matching Scoreboard dùng để lượng hóa đặc điểm của từng nghề nghiệp và làm cơ sở cho quá trình ghép nối giữa kết quả đánh giá người dùng với nghề nghiệp phù hợp.  
* Career Recommendation Report được hiển thị sau khi người dùng hoàn thành bài đánh giá.

Đây là phần trực tiếp tạo ra giá trị hướng nghiệp cho người dùng cuối, giúp FinGuide trở thành một công cụ định hướng nghề nghiệp chuyên ngành tài chính thay vì chỉ là một bài kiểm tra tính cách thông thường.

## **Những việc đã thực sự làm**

### **Việc 1\. Xây dựng Career Research Database**

Nghiên cứu và xây dựng cơ sở dữ liệu cho 16 nhóm nghề nghiệp thuộc lĩnh vực Tài chính – Ngân hàng phù hợp với đối tượng sinh viên và người mới tốt nghiệp tại Việt Nam.

Đối với mỗi nghề nghiệp, em nghiên cứu và tổng hợp:

* Mô tả công việc.  
* Đặc điểm môi trường làm việc.  
* Kỹ năng chuyên môn cần thiết.  
* Các doanh nghiệp tuyển dụng tiêu biểu tại Việt Nam.  
* Áp lực công việc.  
* Tiềm năng phát triển nghề nghiệp.  
* Cơ hội chuyển đổi nghề nghiệp trong tương lai.  
* Lộ trình phát triển dành cho sinh viên.

Các nhóm nghề nghiệp được nghiên cứu bao gồm:

* Audit & Tax  
* Banking Operations  
* Finance Research  
* Investment Research  
* Fintech  
* Client Support  
* Financial Education  
* Quantitative Analysis  
* Brokerage  
* Retail Banking  
* Wealth Advisory  
* Consulting  
* Corporate Finance  
* Retail Banking Support  
* Management Trainee  
* Investment Banking

### **Việc 2\. Xây dựng Career Matching Scoreboard**

Em xây dựng hệ thống chấm điểm nghề nghiệp dựa trên 4 nhóm đặc điểm được sử dụng trong FinGuide:

* Social  
* Theoretical  
* Analytical  
* Structural

Mỗi nghề nghiệp được đánh giá trên thang điểm từ 1–10 cho từng tiêu chí nhằm phản ánh mức độ phù hợp với các nhóm tính cách khác nhau.

Ví dụ:

| Career Path | Social | Theoretical | Analytical | Structural |
| :---- | :---- | :---- | :---- | :---- |
| Audit & Tax | 5 | 3 | 7 | 9 |
| Banking Operations | 4 | 5 | 3 | 6 |
| Investment Research | 5 | 6 | 7 | 6 |
| Investment Banking | 8 | 8 | 7 | 6 |

Từ bảng điểm này, hệ thống có thể so sánh kết quả bài đánh giá của người dùng với đặc điểm của từng nghề nghiệp để xác định nghề phù hợp nhất.

Career Matching Scoreboard đóng vai trò là cầu nối giữa dữ liệu tính cách của người dùng và kết quả recommendation của hệ thống.

### **Việc 3\. Xây dựng Career Recommendation Report**

Sau khi hệ thống xác định nghề nghiệp phù hợp nhất, em xây dựng bộ nội dung Career Recommendation Report nhằm giải thích kết quả và cung cấp định hướng phát triển nghề nghiệp cho người dùng.

Đối với mỗi nghề nghiệp, em xây dựng các phần:

* MBTI Profile Explanation.  
* Why This Career Fits You.  
* What This Career Actually Looks Like.  
* Potential Strengths.  
* Potential Challenges.  
* Explore Before You Commit.  
* Skills You Should Prioritize.  
* Recommended Certifications.  
* Suggested Student Roadmap.  
* Potential Employers in Vietnam.  
* Long-Term Career Opportunities.

Tổng cộng em xây dựng nội dung recommendation cho toàn bộ 16 nhóm nghề nghiệp trong hệ thống.

Ví dụ:

Người dùng có kết quả **ENTJ** **– The Commander**, hệ thống sẽ đề xuất nghề nghiệp **Investment Banking**. Báo cáo sẽ giải thích rằng người dùng phù hợp với môi trường làm việc có tính cạnh tranh cao, áp lực lớn và yêu cầu khả năng lãnh đạo, ra quyết định và giải quyết vấn đề phức tạp. Đồng thời, báo cáo cung cấp thông tin về các công việc điển hình như định giá doanh nghiệp, xây dựng mô hình tài chính và hỗ trợ các thương vụ M\&A, cùng những kỹ năng cần phát triển như Financial Modeling, Valuation, Presentation và Communication, các chứng chỉ phù hợp như CFA và danh sách doanh nghiệp mục tiêu tại Việt Nam như SSI Investment Banking, Vietcap, Deloitte Financial Advisory và EY Strategy & Transactions.

## **File, tính năng, dữ liệu, logic, giao diện, tài liệu hoặc phần demo đã đóng góp**

### **Career Research Database**

Bộ dữ liệu nghiên cứu nghề nghiệp cho 16 nhóm nghề nghiệp thuộc lĩnh vực Tài chính – Ngân hàng.

### **Career Matching Scoreboard**

Bảng chấm điểm nghề nghiệp dựa trên 4 tiêu chí:

* Social  
* Theoretical  
* Analytical  
* Structural

Được sử dụng làm nền tảng cho hệ thống recommendation.

### **Career Recommendation Report**

Bộ nội dung tư vấn nghề nghiệp cá nhân hóa cho từng kết quả nghề nghiệp.

Bao gồm:

* 16 MBTI – Career Matching Reports.  
* Career Guidance Content.  
* Student Development Roadmaps.  
* Skills & Certification Recommendations.

## **Bằng chứng đóng góp**

* File excel Career Research Database.  
* File excel Career Matching Scoreboard.  
* File doc Recommendation Report.  
* Ghi chú họp nhóm liên quan đến Career Research và Recommendation Design.

## **Phần đóng góp đó kết nối thế nào với sản phẩm cuối cùng**

Phần việc em thực hiện đóng vai trò là nền tảng tri thức của toàn bộ hệ thống FinGuide.

Career Research Database cung cấp dữ liệu nghề nghiệp để hệ thống có thể hiểu và phân biệt các lựa chọn nghề nghiệp trong ngành Tài chính – Ngân hàng.

Career Matching Scoreboard cung cấp dữ liệu đầu vào cho hệ thống recommendation bằng cách lượng hóa đặc điểm của từng nghề nghiệp, giúp nhóm phát triển logic ghép nối giữa kết quả đánh giá người dùng và nghề nghiệp phù hợp.

Career Recommendation Report giúp chuyển đổi kết quả đánh giá thành nội dung hướng nghiệp thực tế, giúp người dùng hiểu được lý do nghề nghiệp đó phù hợp với bản thân và biết cần làm gì để theo đuổi nghề nghiệp đó trong tương lai.

Nhờ ba thành phần này, FinGuide không chỉ thực hiện chức năng đánh giá tính cách mà còn cung cấp giá trị hướng nghiệp và định hướng phát triển nghề nghiệp cho người dùng.

## **Điều cá nhân học được**

Thông qua dự án, em có cơ hội nghiên cứu sâu hơn về các nhóm nghề nghiệp trong ngành Tài chính – Ngân hàng và hiểu rõ hơn sự khác biệt giữa các lĩnh vực như Audit, Investment Banking, Fintech, Wealth Advisory hay Corporate Finance.

Em cũng học được cách chuyển đổi thông tin nghề nghiệp từ dạng mô tả định tính thành dữ liệu có cấu trúc để phục vụ cho hệ thống recommendation.

Ngoài ra, em hiểu rõ hơn về cách xây dựng một sản phẩm công nghệ trong lĩnh vực giáo dục tài chính, trong đó dữ liệu nghề nghiệp, logic ghép nối và nội dung hướng dẫn người dùng đều cần được thiết kế đồng bộ để tạo ra trải nghiệm có giá trị thực tế.

## **Khó khăn đã gặp và cách xử lý**

Khó khăn lớn nhất là nhiều nghề nghiệp trong ngành Tài chính – Ngân hàng có những điểm tương đồng về kỹ năng và môi trường làm việc, khiến việc phân biệt và xây dựng tiêu chí đánh giá gặp nhiều khó khăn.

Ví dụ, Investment Banking và Consulting đều yêu cầu kỹ năng phân tích và giao tiếp ở mức cao; Retail Banking và Wealth Advisory đều liên quan đến khách hàng cá nhân; Finance Research và Investment Research cũng có nhiều điểm giao thoa về công việc nghiên cứu.

Để xử lý vấn đề này, em tham khảo mô tả công việc thực tế từ doanh nghiệp, tài liệu nghề nghiệp quốc tế và trao đổi với các thành viên trong nhóm để xác định đặc điểm nổi bật nhất của từng nghề nghiệp trước khi đưa vào hệ thống chấm điểm.

Bên cạnh đó, việc xây dựng nội dung recommendation cho 16 nhóm nghề nghiệp cũng đòi hỏi đảm bảo tính nhất quán về cấu trúc nhưng vẫn giữ được đặc điểm riêng của từng nghề. Em giải quyết bằng cách xây dựng một framework thống nhất cho tất cả các báo cáo nghề nghiệp trước khi phát triển nội dung chi tiết.

## **Lời nhắn cho sinh viên khóa sau**

Nếu tiếp tục phát triển FinGuide, em khuyến nghị nên mở rộng cơ sở dữ liệu nghề nghiệp và tăng cường hoạt động khảo sát thực tế với sinh viên, người đi làm và nhà tuyển dụng để hiệu chỉnh hệ thống recommendation.

Bên cạnh đó, nên tập trung đầu tư vào chất lượng dữ liệu nghề nghiệp và logic ghép nối giữa tính cách với nghề nghiệp, vì đây là yếu tố quyết định giá trị thực tế của sản phẩm. Một hệ thống recommendation chỉ thực sự hữu ích khi có dữ liệu nghề nghiệp chính xác, phù hợp với thị trường lao động và có khả năng cung cấp định hướng rõ ràng cho người dùng.

