import React from 'react'
import '../Styles/UpdatedTiles.css'
import { hex } from '../assets/hex-figma.svg'
import { hex_hover } from '../assets/hex-figma-hover.svg'
import { Link } from 'react-scroll'

function UpdatedTiles() {
    return (
        <div className='wrapper'>
            <div class="top-row">
                <Link to="About" smooth duration={800}>
                    <div class="hexagon-updated-tiles">
                        About

                    </div>
                </Link>
            </div>
            <div class="first-middle-row">
                <Link to="Education" smooth duration={800}>
                    <div class="hexagon-updated-tiles">
                        Education

                    </div>
                </Link>
                <div class="hexagon-updated-tiles">
                    <Link to="Experience" smooth duration={800}>
                        <div class="hexagon-updated-tiles">
                            Experience

                        </div>
                    </Link>
                </div>

            </div>
            <div class="middle-row">
                <div class="hexagon-updated-tiles">
                    <Link to="Projects" smooth duration={800}>
                        <div class="hexagon-updated-tiles">
                            Projects

                        </div>
                    </Link>
                </div>
                <div class="hexagon-updated-tiles">
                    <Link to="Publications" smooth duration={800}>
                        <div class="hexagon-updated-tiles">
                            Publications

                        </div>
                    </Link>
                </div>
            </div>
            <div class="bottom-row">
                <div class="hexagon-updated-tiles">
                    <Link to="Teachings" smooth duration={800}>
                        <div class="hexagon-updated-tiles">
                            Teaching

                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default UpdatedTiles