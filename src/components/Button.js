import React from 'react'
import styles from './Button.module.css'
import { MdMessage } from "react-icons/md"
import { IoIosCall } from "react-icons/io"
import { MdMarkEmailUnread } from "react-icons/md"

export default function Button() {
    return (
        <div className='contbtn'>
        <div className={styles.container}>
            <button className="btn">
                <MdMessage />
                VIA SUPPORT CHAT
            </button>
            <button className="btn">
                <IoIosCall />
                VIA CALL
            </button>
            <br></br>
            <button className="emailbtn">
                <MdMarkEmailUnread className='icons' />
                VIA EMAIL FORM
            </button>
        </div>
        </div>
    )
}
