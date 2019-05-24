import React from 'react'
import { Link } from 'gatsby'

import style from './Footer.module.css'

const Footer = () => (
  <footer className={style.root}>
    Yellow & Yellow Fashion - Via Venezia, 17 - 35027 Noventa Padovana (PD) -{' '}
    P.Iva 02489470282 |&nbsp;<Link to="/cookie">Note legali</Link>&nbsp;|&nbsp;
    <Link to="/privacy">Privacy</Link>
  </footer>
)

export default Footer
