import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

    const updateWindowSize = () => {
        setWindowSize({
            width:
                window.innerWidth ||
                document.documentElement.clientWidth ||
                document.body.clientWidth,
            height:
                window.innerHeight ||
                document.documentElement.clientHeight ||
                document.body.clientHeight,
        })
    }

    useEffect(() => {
        updateWindowSize()
        window.addEventListener('resize', updateWindowSize)
        return () => {
            window.removeEventListener('resize', updateWindowSize)
        }
    }, [])

    return (
        <header className="header">
            <div className="header__top">
                
                {/* <ul>
                    <li>
                        <a href="">로그인</a>
                    </li>
                    <li>
                        <select name="" id="">
                            <option value="">한국어</option>
                        </select>
                    </li>
                    <li>
                        <a href="">검색</a>
                    </li>
                    <li>
                        <a href="">관리자</a>
                    </li>
                </ul> */}
            </div>
            <div className="header__bottom">
                <div className="logo">
                    <p>민세로고</p>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to={`../gallery`}>갤러리게시판</Link>
                        </li>
                        <li>일정표</li>
                    </ul>
                </nav>
            </div>
            <p className="test-width">
                가로폭: {windowSize.width}px, 높이: {windowSize.height}px
            </p>
        </header>
    )
}

export default Header
