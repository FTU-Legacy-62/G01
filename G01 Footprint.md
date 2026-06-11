## Product Name

FinGuide

## Code

G01

## Link repo

[https://github.com/FTU-Legacy-62/Gxx](https://github.com/FTU-Legacy-62/Gxx)

## Link demo

[https://ftu-legacy-62.github.io/G01/](https://ftu-legacy-62.github.io/G01/)

## Problem statement

Sinh viên đại học đang theo học hoặc quan tâm đến ngành Tài chính có rất ít hoặc gần như không có kiến thức về các cơ hội nghề nghiệp trong ngành, gặp khó khăn trong việc tìm kiếm thông tin và xác định công việc phù hợp với bản thân.

Các trung tâm đào tạo tài chính gặp khó khăn trong việc kết nối với những người chưa có kinh nghiệm hoặc kiến thức nền tảng về Tài chính, Ngân hàng, Kiểm toán.

Cảm giác mất phương hướng hoặc không chắc chắn khi chọn chuyên ngành học, công việc đầu tiên hay khi lập lộ trình học tập dài hạn là những mối lo ngại lớn của sinh viên mới vào trường (freshers).

## Target users

Sinh viên mới vào trường (freshers) quan tâm đến ngành Tài chính.

## When will they use FinGuide:

Khi cảm thấy mất phương hướng hoặc không chắc chắn về việc chọn chuyên ngành học hoặc công việc đầu tiên.

Khi lập lộ trình học tập dài hạn (quyết định nên theo đuổi chứng chỉ nghề nghiệp nào).

Trong các sự kiện định hướng nghề nghiệp, hội thảo chuyên ngành hoặc ngày hội việc làm do SAPP Academy hoặc các trường đại học tổ chức.

## What the Product Currently Does

Đánh giá tính cách:
Cho phép người dùng thực hiện bài kiểm tra tình huống gồm 60 câu hỏi được thiết kế riêng cho bối cảnh tài chính/kế toán để tính toán điểm số đặc điểm tính cách trên bốn phổ (E/I, S/N, T/F, J/P), từ đó tổng hợp điểm số để phân loại người dùng vào một trong 16 nhóm tính cách MBTI tiêu chuẩn.

Báo cáo nghề nghiệp tùy chỉnh:
Kết nối người dùng với con đường sự nghiệp tài chính phù hợp nhất (ví dụ: INTJ tương thích với Nghiên cứu đầu tư, ESFP tương thích với Ngân hàng bán lẻ).
Cung cấp các phân tích chi tiết cụ thể bao gồm "Mô tả công việc thực tế", "Thế mạnh" và "Thách thức".

Lộ trình & Khuyến nghị giáo dục (Tích hợp SAPP):
Liên kết trực tiếp các con đường sự nghiệp được gợi ý với các khóa học và chứng chỉ cụ thể tại SAPP (CFA, ACCA, CGMA, CMA, Big 4 Fast-Track) cùng với lộ trình 4 năm của sinh viên và các nhà tuyển dụng mục tiêu tại Việt Nam.

## User flow

1. Mở sản phẩm: Người dùng truy cập ứng dụng web FinGuide, xem tiêu đề hấp dẫn và nhấp vào nút "Start" trên Màn hình chào mừng.


2. Thực hiện trắc nghiệm: Người dùng lần lượt đọc các câu hỏi tình huống tài chính/kế toán một cách tuần tự, nhấp vào 1 trong 5 nút tùy chọn có biểu cảm. Thanh tiến trình phía trên tiến triển từ 0% đến 100%.


3. Xử lý dữ liệu ngầm: Khi người dùng nhấp vào tùy chọn cho câu hỏi thứ 20, JavaScript sẽ xử lý các mô hình toán học (cộng dồn điểm số, phân loại mã, tính phần trăm và tạo các chuỗi HTML) ngay lập tức ở chế độ nền mà không cần tải lại trang.


4. Xem kết quả: Trang kết quả tự động hiển thị báo cáo toàn diện bao gồm: mã MBTI 4 chữ cái, một hình ảnh đại diện phong cách truyện tranh, chức danh tài chính phù hợp nhất và các biểu đồ thanh ngang Trait Breakdown kích thước lớn nằm cạnh nhau (Xanh dương/Hồng).


5. Khám phá chuyên sâu: Người dùng mở rộng các hộp Accordion thả xuống để tìm hiểu "Lộ trình 4 năm của sinh viên", "Thế mạnh & Thách thức", khám phá các siêu liên kết khóa học SAPP được nhúng sẵn, hoặc nhấp vào "Do it again!" để thiết lập lại trạng thái và bắt đầu lại.



## Input

Tương tác trắc nghiệm: Các lựa chọn của người dùng trên thang đo Likert 5 mức độ (từ "Nope" [-2] đến "Absolutely" [+2]) cho mỗi câu hỏi trong số 20 câu hỏi.
Dữ liệu luồng giao diện (UI Flow): Các lượt nhấp của người dùng để bật tắt và mở rộng các phần báo cáo chi tiết (Accordions) nhằm đọc các phân tích sâu về nghề nghiệp.

## Process

Ma trận tính điểm: Mỗi câu hỏi trong cơ sở dữ liệu 20 câu được gán cho một phổ tính cách cụ thể (E/I, S/N, T/F, J/P) và mang một hướng trọng số định sẵn (direction: 1 hoặc -1). Khi người dùng chọn một tùy chọn (-2 đến +2), điểm số động được tính là: Lựa chọn * Trọng số (Direction).

Phân loại MBTI: Hệ thống tổng hợp tổng điểm cho từng nhóm đặc tính. Nếu điểm tích lũy >= 0, đặc tính dương trội (E, S, T hoặc J) sẽ được chỉ định. Nếu điểm số < 0, đặc tính âm (I, N, F hoặc P) sẽ được chọn. Bốn chữ cái cuối cùng này sẽ được ghép chuỗi thành một mã MBTI thống nhất (ví dụ: ISTJ, ENTJ).

Thuật toán chuẩn hóa phần trăm (Trait Breakdown): Để cung cấp dữ liệu cho các thanh tiến trình ngang, điểm thô tuyến tính được chuyển đổi sang thang đo 0% - 100% dễ đọc bằng công thức tỷ lệ toán học dựa trên số điểm tối đa có thể đạt được cho mỗi đặc tính.

Ánh xạ dữ liệu giáo dục SAPP: Hệ thống tự động chèn các siêu liên kết HTML dẫn trực tiếp đến các chương trình đào tạo chuyên nghiệp tương ứng tại SAPP Academy (ACCA, CFA, CMA, CGMA, Big 4 Fast-Track). Nếu một con đường sự nghiệp thiếu khóa học tương thích, hệ thống sẽ bỏ qua liên kết một cách mượt mà đi kèm một ghi chú rõ ràng.

## Output

Phân loại tính cách:
Xác định chính xác 1 trong 16 nhóm tính cách MBTI đi kèm với một hình ảnh đại diện minh họa trực quan độc quyền.

Hồ sơ nghề nghiệp tài chính:
Các phân tích văn bản toàn diện phác thảo cái nhìn tổng quan thực tế về công việc "một ngày như thế nào", các mục đầu dòng rõ ràng chi tiết về Thế mạnh & Thách thức phát triển, và các kỹ năng chuyên môn ưu tiên.

Lộ trình sinh viên thực tế:
Một dòng thời gian chiến lược 4 năm từng bước (giai đoạn Năm nhất-Năm hai, Năm ba, Năm tư) được thiết kế riêng cho sinh viên đại học.

Siêu liên kết giáo dục: Các liên kết mã màu nổi bật, hiển thị rõ ràng được nhúng mượt mà trong các cấu phần văn bản, định hướng người dùng đến các trang thông tin khóa học/chứng chỉ chính thức của SAPP Academy.

## Key Design Decision

Tại sao chọn vấn đề này và đối tượng mục tiêu này?
Sinh viên ngành Kinh tế và Tài chính tại Việt Nam thường chọn ngành học dựa trên xu hướng đám đông hoặc lời truyền miệng chung chung, khiến họ bị mơ hồ về các nhiệm vụ thực tế tại doanh nghiệp sau khi tốt nghiệp. Công cụ này giảm thiểu sự lệch hướng nghề nghiệp sớm ngay từ cấp độ đại học.

Tại sao chọn bài trắc nghiệm kiểu MBTI kết hợp với giao diện Truyện tranh (Comic Book)?
Các bài đánh giá doanh nghiệp và kiểm tra nghề nghiệp truyền thống thường khô khan, cứng nhắc và đặt nặng tính học thuật, điều này dễ làm cho những người trẻ tuổi cảm thấy e dè hoặc mất hứng thú.
Việc kết hợp một khung lý thuyết quen thuộc, dễ tiếp cận như MBTI với giao diện truyện tranh sống động (đường nét đen dày, bảng màu tương phản cao và các biểu tượng cảm xúc sinh động) biến một bài đánh giá nghề nghiệp nghiêm túc thành một hành trình trò chơi hóa vui vẻ. Phương pháp năng động này giúp hạ thấp rào cản tâm lý khi tiếp cận một cách hiệu quả, làm cho quá trình tự khám phá bản thân trở nên thân thiện, thú vị và dễ tiếp cận hơn rất nhiều đối với các bạn freshers bước đầu định hình lộ trình công việc.

Tại sao tích hợp trực tiếp các chương trình học của SAPP?
Định hướng sự nghiệp sẽ trở nên sáo rỗng nếu thiếu đi các bước hành động tiếp theo. Việc tích hợp các chứng chỉ chuẩn quốc tế (ACCA, CFA, v.v.) cùng với các bài viết thông tin chính thức của SAPP ngay lập tức mang lại một "bước đi tiếp theo" thực tế và có độ tin cậy cao cho hành trình học tập của người dùng.

## Highlights

Xử lý logic & Ánh xạ MBTI-nghề nghiệp chính xác: Xây dựng thành công một ma trận logic giúp kết nối chính xác 16 nhóm tính cách MBTI với các vai trò cụ thể, thực tế trong ngành tài chính. Sự kết nối logic sâu sắc này đảm bảo các khuyến nghị nghề nghiệp mang tính cá nhân hóa cao, thuyết phục và có giá trị thực tiễn cho người dùng.

Hiệu năng ứng dụng Single-Page mượt mà: Việc xử lý chuyển đổi câu hỏi và tạo báo cáo độc quyền thông qua JavaScript thuần phía máy khách (client-side) tạo ra trải nghiệm tinh tế, nhanh chóng và hoàn toàn không có độ trễ máy chủ.

Tổ chức bố cục thông minh: Việc sử dụng các cấu phần Accordion tương tác để trình bày các báo cáo chuyên sâu giúp giữ cho các khối văn bản được ẩn đi cho đến khi có yêu cầu. Điều này ngăn chặn tình trạng quá tải thông tin khi vừa truy cập trang kết quả, đồng thời tiết kiệm không gian màn hình theo chiều dọc.

## Limitations

Giới hạn nghiêm ngặt trong 16 hồ sơ MBTI: Hoạt động dựa trên khung tiêu chuẩn gồm 2 đặc tính cho mỗi danh mục. Việc mở rộng độ phân giải tính cách (ví dụ: mở rộng thành 3 đặc tính cho mỗi danh mục, tạo ra 81 tổ hợp khác nhau) đòi hỏi một khối lượng nội dung độc duy nhất khổng lồ và hoàn toàn không khả thi đối với một Sản phẩm khả dụng tối thiểu (MVP).

Không có lưu trữ dữ liệu bền vững: Vì bộ máy phụ thuộc hoàn toàn vào các biến bộ nhớ JavaScript phía máy khách, việc nhấn F5 (Tải lại trang) hoặc đóng tab sẽ xóa hoàn toàn dữ liệu báo cáo. Hiện tại chưa có cơ chế tích hợp để tải kết quả dưới dạng PDF hoặc lưu tiến trình trong LocalStorage.

Khoảng trống danh mục khóa học:
Đối với các hồ sơ phù hợp với mảng ngân hàng bán lẻ (ESFP, ESFJ, ISFJ) hoặc các định hướng kỹ thuật công nghệ Fintech (ISTP), hệ thống sẽ để lại một ghi chú trống vì một số trung tâm đào tạo tài chính thiếu các chương trình đào tạo trực tiếp cho các phân khúc vận hành kỹ thuật/hậu cần cụ thể đó.

## What the Team Learned

Phân tích hành vi người dùng và Giải quyết vấn đề: Chúng em nhận thấy rằng việc trình bày nội dung chuyên môn cao (như các khung tài chính và kế toán phức tạp) qua các phương pháp học thuật truyền thống tạo ra một rào cản lớn đối với việc tiếp cận của nhóm người dùng trẻ (Gen Z). Việc triển khai các kỹ thuật trò chơi hóa thông qua giao diện sống động, kích thích thị giác và các biểu tượng trực quan đã chứng minh tính hiệu quả cao trong việc giảm thiểu các rào cản này và tối đa hóa việc giữ chân người dùng.

Kiến trúc logic và Xử lý dữ liệu: Đội ngũ đã tích lũy được năng lực trong việc xây dựng ma trận tính điểm tuyến tính và thuật toán phân loại MBTI sử dụng hoàn toàn Vanilla JavaScript. Bằng cách áp dụng hướng trọng số (1 hoặc -1) cho các biến số riêng lẻ, chúng em đã tối ưu hóa mã nguồn đáng kể, bỏ qua các câu lệnh điều kiện lặp đi lặp lại. Hơn nữa, chúng em nhận thức được tầm quan trọng chiến lược của việc quản lý phạm vi nghiêm ngặt — giới hạn khung ở 16 mô hình tính cách để đảm bảo MVP khả thi và có thể bàn giao.

Thiết kế và Tối ưu hóa UI/UX: Chúng em đã nâng cao đáng kể khả năng của mình trong việc trực quan hóa dữ liệu động. Quá trình khắc phục lỗi hệ thống cho cấu phần Trait Breakdown một cách có hệ thống đã giúp nhóm làm chủ các phương pháp CSS nâng cao (Flexbox, Grid), đảm bảo giao diện duy trì tính toàn vẹn cấu trúc, khả năng đáp ứng và độ sắc nét về mặt hình ảnh trên tất cả các kích thước màn hình và loại thiết bị.

Trình diễn sản phẩm và Giao tiếp: Chúng em kết luận rằng một sản phẩm phần mềm cao cấp đòi hỏi một luồng trải nghiệm không gián đoạn. Việc sử dụng kiến trúc Ứng dụng một trang (SPA) đã loại bỏ độ trễ và việc tải lại trang, đảm bảo hành trình người dùng diễn ra liền mạch. Sự chuyển đổi dữ liệu tức thời này đã nâng cao đáng kể tác động chuyên nghiệp cho các buổi demo sản phẩm trực tiếp của chúng em.

## Recommendations for Future Cohorts

Quản lý phạm vi và Phòng tránh bẫy phình chướng tính năng (Feature Creep): Việc duy trì sự tập trung vào hoàn thiện vòng chức năng cốt lõi là điều bắt buộc. Chúng em cảnh báo việc mở rộng quá mức ma trận tính cách thành các hoán vị không thể quản lý (ví dụ: 81 hoặc 256 loại). Sự gia tăng lũy thừa trong việc tạo nội dung tùy chỉnh sẽ gây áp lực nghiêm trọng lên việc phân bổ nguồn lực cho một dự án học thuật.

Thu thập và Mở rộng dữ liệu thực nghiệm: Để nâng cao tính xác thực và giá trị thực tiễn của các báo cáo nghề nghiệp, các khóa sau nên tiến hành nghiên cứu thị trường sơ cấp bằng cách phỏng vấn các chuyên gia đang hoạt động trong ngành. Việc tích hợp dữ liệu thực nghiệm, chẳng hạn như các trích dẫn thực tế từ ngành và các khung lương khởi điểm đương đại, sẽ nâng cao đáng kể uy tín của nền tảng. Hơn nữa, cơ sở dữ liệu giáo dục nên được mở rộng để bao gồm các lĩnh vực phát triển chuyên môn toàn diện hiện đang nằm ngoài phạm vi của khung chương trình giảng dạy hiện tại.
