import React from 'react'

function LeftNav() {

    const scrollTop = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    };

    return (
        <div>
            <button className="btn" id="logo-wrapper" onClick={scrollTop}>
                <img id="logo-image" src="../img/home.png" alt="페이지 맨 위로 이동하기" />
                {/* C:\coding\portfolio\public\img\home.png */}
            </button>
        </div>
    )
}

export default LeftNav
