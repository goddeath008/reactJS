import React from 'react';
import './MemberStyle.css';
import '@fortawesome/fontawesome-free/css/all.css';


const Member = () => {
    return (
        <div>
        <div className='Banner'>

        <p className='thanhvien'>Thành Viên</p>

        </div>
        <div className='roww'>
        <p className='thanhvienbni'>3 Bước đơn giản để trở thành Thành viên BNI</p>

            <div className='huongdan'>
                
                <span className='card'>
                    <i className="fas fa-file-lines iconn"></i>
                    <h4>1. Hoàn tất đăng ký</h4>
                </span>
               
                <span className='card'>
                    <i className="fas fa-arrow-right iconn"></i>
                    <h4>2. Ban thanh viên xét duyệt</h4>
                </span>
                <span className='card'>
                    <i className="fas fa-check iconn"></i>
                    <h4>3. Kết nạp thành viên</h4>
                </span>
            </div>
        </div>
        <div>
            <hr className='kengang'></hr>
        </div>
        <div className='mainmember'>
            <h1>thành viên <span style={{ color: 'red' }}>chính thức</span></h1>
            
        </div>
        <div className='Searchh'>
           <input type='search' name='search' id='member-search-query' className='form-control' placeholder='Nhập tên, tên công ty'></input>
           <button id='buttonn'><i className='fas fa-search'></i></button>
        </div>
        <div className='row justify-content-evenly item-list container mb32'>
                <div className='col-md-3 item-card'>
                    <div className='item-logo-head'>
                        <img className='item-logo' src='https://csjchapter.com/web/image/res.partner/74/avatar_512/'  />
                        <h2> 360 CORP</h2>
                    </div>
                    
                    <img className='item-avt' src='https://csjchapter.com/web/image/res.partner/8/avatar_512/'/>
                    <div className='item-name'>
                        <h3>Lê Bá Châu</h3>
                        <h3>Giám Đốc</h3>
                        <h3>Ngành Nghề: Chuyển Đổi Doanh Số</h3>

                    </div>
                    <div className='item-contact'>
                        <div className='itemm'>
                            <button className='itemm-btn lienhe' ><i className='fas fa-share-alt'></i> Lưu liên hệ</button><br/>
                            <button className='itemm-btn ws'><i className='fas fa-globe'></i> Đến website!</button>
                        </div>
                        <img className='item-qr' src='https://th.bing.com/th/id/OIP.IXntiwrd94WKK034O0YBUAHaJM?rs=1&pid=ImgDetMain'/>
                    </div>
                    <div className='item-address'>
                        <h3><i className='fas fa-map-marker'></i> 155 Nguyễn Thái Học, F7, Vũng Tàu, Bà Rịa - Vũng Tàu, Việt Nam</h3>
                    </div>
                    
                </div>  
                <div className='col-md-3 item-card'>
                    <div className='item-logo-head'>
                        <img className='item-logo' src='https://csjchapter.com/web/image/res.partner/74/avatar_512/'  />
                        <h2> 360 CORP</h2>
                    </div>
                    
                    <img className='item-avt' src='https://csjchapter.com/web/image/res.partner/8/avatar_512/'/>
                    <div className='item-name'>
                        <h3>Lê Bá Châu</h3>
                        <h3>Giám Đốc</h3>
                        <h3>Ngành Nghề: Chuyển Đổi Doanh Số</h3>

                    </div>
                    <div className='item-contact'>
                        <div className='itemm'>
                            <button className='itemm-btn lienhe' ><i className='fas fa-share-alt'></i> Lưu liên hệ</button><br/>
                            <button className='itemm-btn ws'><i className='fas fa-globe'></i> Đến website!</button>
                        </div>
                        <img className='item-qr' src='https://th.bing.com/th/id/OIP.IXntiwrd94WKK034O0YBUAHaJM?rs=1&pid=ImgDetMain'/>
                    </div>
                    <div className='item-address'>
                        <h3><i className='fas fa-map-marker'></i> 155 Nguyễn Thái Học, F7, Vũng Tàu, Bà Rịa - Vũng Tàu, Việt Nam</h3>
                    </div>
                    
                </div> 
                <div className='col-md-3 item-card'>
                    <div className='item-logo-head'>
                        <img className='item-logo' src='https://csjchapter.com/web/image/res.partner/74/avatar_512/'  />
                        <h2> 360 CORP</h2>
                    </div>
                    
                    <img className='item-avt' src='https://csjchapter.com/web/image/res.partner/8/avatar_512/'/>
                    <div className='item-name'>
                        <h3>Lê Bá Châu</h3>
                        <h3>Giám Đốc</h3>
                        <h3>Ngành Nghề: Chuyển Đổi Doanh Số</h3>

                    </div>
                    <div className='item-contact'>
                        <div className='itemm'>
                            <button className='itemm-btn lienhe' ><i className='fas fa-share-alt'></i> Lưu liên hệ</button><br/>
                            <button className='itemm-btn ws'><i className='fas fa-globe'></i> Đến website!</button>
                        </div>
                        <img className='item-qr' src='https://th.bing.com/th/id/OIP.IXntiwrd94WKK034O0YBUAHaJM?rs=1&pid=ImgDetMain'/>
                    </div>
                    <div className='item-address'>
                        <h3><i className='fas fa-map-marker'></i> 155 Nguyễn Thái Học, F7, Vũng Tàu, Bà Rịa - Vũng Tàu, Việt Nam</h3>
                    </div>
                    
                </div> 
                {/* <div className='col-lg-3 item-card'>
                    <div className='item-logo-head'>
                        <img className='item-logo' src='https://csjchapter.com/web/image/res.partner/74/avatar_512/'  />
                        <h2> 360 CORP</h2>
                    </div>
                    
                    <img className='item-avt' src='https://csjchapter.com/web/image/res.partner/8/avatar_512/'/>
                    <div className='item-name'>
                        <h3>Lê Bá Châu</h3>
                        <h3>Giám Đốc</h3>
                        <h3>Ngành Nghề: Chuyển Đổi Doanh Số</h3>

                    </div>
                    <div className='item-contact'>
                        <div className='itemm'>
                            <button className='itemm-btn lienhe' ><i className='fas fa-share-alt'></i> Lưu liên hệ</button><br/>
                            <button className='itemm-btn ws'><i className='fas fa-globe'></i> Đến website!</button>
                        </div>
                        <img className='item-qr' src='https://th.bing.com/th/id/OIP.IXntiwrd94WKK034O0YBUAHaJM?rs=1&pid=ImgDetMain'/>
                    </div>
                    <div className='item-address'>
                        <h3><i className='fas fa-map-marker'></i> 155 Nguyễn Thái Học, F7, Vũng Tàu, Bà Rịa - Vũng Tàu, Việt Nam</h3>
                    </div>
                    
                </div> 
                <div className='col-lg-3 item-card'>
                    <div className='item-logo-head'>
                        <img className='item-logo' src='https://csjchapter.com/web/image/res.partner/74/avatar_512/'  />
                        <h2> 360 CORP</h2>
                    </div>
                    
                    <img className='item-avt' src='https://csjchapter.com/web/image/res.partner/8/avatar_512/'/>
                    <div className='item-name'>
                        <h3>Lê Bá Châu</h3>
                        <h3>Giám Đốc</h3>
                        <h3>Ngành Nghề: Chuyển Đổi Doanh Số</h3>

                    </div>
                    <div className='item-contact'>
                        <div className='itemm'>
                            <button className='itemm-btn lienhe' ><i className='fas fa-share-alt'></i> Lưu liên hệ</button><br/>
                            <button className='itemm-btn ws'><i className='fas fa-globe'></i> Đến website!</button>
                        </div>
                        <img className='item-qr' src='https://th.bing.com/th/id/OIP.IXntiwrd94WKK034O0YBUAHaJM?rs=1&pid=ImgDetMain'/>
                    </div>
                    <div className='item-address'>
                        <h3><i className='fas fa-map-marker'></i> 155 Nguyễn Thái Học, F7, Vũng Tàu, Bà Rịa - Vũng Tàu, Việt Nam</h3>
                    </div>
                    
                </div>      */}
       
        </div>
    </div>
    );
};

export default Member;