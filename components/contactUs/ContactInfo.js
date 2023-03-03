import React from 'react'
import ContactItemInfo from './contactUsItem'
//icons
import { faWhatsapp, } from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import styles from "./contactInfos.module.css"
function ContactInfo() {
  return (
    <div className={styles.contactInfosWraper}>
      <ContactItemInfo
        icon={faWhatsapp}
        title="Whatsapp Number"
        data="+92 347 0555428"
      />
      <ContactItemInfo
        icon={faEnvelope}
        title="Email"
        data="support@deketmet.com"
      />
    </div>
  )
}

export default ContactInfo