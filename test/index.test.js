import fs from 'fs'
import path from 'path'

import { extractQRCodes } from '../src/index'

describe('Extract QR Codes', () => {
  describe('Extract from an image', () => {
    it('Decode a vaccine cert from an image', async () => {
      const image = fs.readFileSync(
        path.join(__dirname, 'images', 'vaccinecert.png')
      )
      const result = await extractQRCodes({
        source: { image },
      })
      expect(result.length).toEqual(1)
      expect(result[0]).toEqual(
        'HC1:6BF%RN%TSMAHN-HVUOEJPJ-QNT3BNN0II4WFC9B:OQW.7LQCCJ9T$U+OCDTU--M:UC*GP-S4FT5D75W9AAABE34L/5R3FMIA5.BR9E+-C2+86LF4MH7DANI94JBTC96FM:3DK196LFGD9+PBLTL8KES/F-1JZ.KDKL6JKX2M0ECGGBYPLR-S:G10EQ928GEQW2DVJ55M8G1A9L5TM8/H0QF6IS6G%64.U4G6PF5RBQ746B46O1N646RM93O5RF6$T61R64IM646-3AQ$95:UENEUW6646C46846OR6UF5 QVCCOE700OP D9M1MPHN6D7LLK*2HG%89UV-0LZ 2.A5:01395*CBVZ0K1H$$0VON./GZJJQU2K+5MV0GX89LN8EFJH1PCDJ*3TFH2V4IF1D 8EC7CEF172BWF4 NIREK%C-KN+JSJEU:XQ$NJMO07VBM$FW8Q:/TH7GXUU%BTMZMTKHSP5NWBZ/EOKI0*SXB1L7M$Y34IECEC7$MAWD.BO7NC.AR100000FGWZJS0MF'
      )
    })

    it('Decode a vaccine cert from an jpeg image', async () => {
      const image = fs.readFileSync(path.join(__dirname, 'images', 'test4.jpg'))
      const result = await extractQRCodes({
        source: { image },
      })
      expect(result.length).toEqual(1)
      expect(result[0]).toEqual(
        'HC1:NCFMX1BM7OD0C40JHEEG4X9DW$0:BN-QR+BOY3Q618NTRL/2K8TVXA-X1E2FO:NBTN1:N2:I/8DIAD-*L1OFNT4%D2PNC1/H/1HDTQZ:IVDQ2N0PKIN2U5.V$7VK+5EQU%ABJV9-N3HRJ5BTGQL9J9*GTU6N3DRZLFA*R6QT 10QYBFSAI5BOJDM6R-7P:AABB9Y$U*323LKPSBMSVJ5RG8F*RSYM1AS2558ZCNIYHZGHN2FPNKD+5W37OJ1ZCPL/7QI0%:5XY5QY8AKEC:QU8DMTK/E5C671KBNI2VRJBD6W88YB1L729:C6CM.GF:6J9:BFVMJWIG/2BLEKDQ:7FUA0805SLKB94CT3UA0/%CE 4*Q8%.H*DHK L7.P MQO$NAX6CW5KL7N1DWMGVH15H76ATDFBT JV43FR8I.O$/ALEB4C4 XOD*S+D47N23MH3KAI8H9CG/LRG-KH7NTLF25GU*VB0UG83Q4OMIB$0Q/OSP1FE3D*KUHPCCA7N7IBBWD*F/9N6TQ2+PCOS%UT/%4TH71/J53WP%VQ6U05WA6075G'
      )
    })

    it('Decode a recovery cert from an image', async () => {
      const image = fs.readFileSync(
        path.join(__dirname, 'images', 'recoverycert.png')
      )
      const result = await extractQRCodes({
        source: { image },
      })
      expect(result.length).toEqual(1)
      expect(result[0]).toEqual(
        'HC1:6BF%RN%TSMAHN-HVUOEJPJ-QNT3BNN1C2.7JC89XW3M TM*4335JXEAD64ZQ NI4EFSYS1-ST*QGTAAY7.Y7B-S-*O5W41FDNILAOV KLLF9$HFCD4-LN1FDBY4I0CU0GJMO9NT/Y4HD4G5OZD5CC9T0HE1JCNNQ7TT0H-FHT-HNTIUZUIS7HRIWQH.UCXGAMF2NI9QRAJG9IVU5P2-GA*PE+E6JT72JA H2XJAWLI+J53O8J.V J8$XJK*L5R1IS7K*LBT19+JIU1$GO P3JKB523KD3423 73DIB8J3OHBPHB%*4WV2Z73423ZQTZABKD3O05C$KFGF35T-B5P54YII*50 X4CZKHKB-43.E3KD3BBJC57.JLY8UF28JAAJGUEO5Z J3BHPCTYY3G:7H.VQ%V9UV/:8U1LZ8KZ2VT6ELPCPZ7.4Q05TOV0AQ5BQGR6E-*3CM7ZDDF4NC.SQVPHZ8000U507EWFDA13'
      )
    })

    it.skip('Decode a recovery cert from an image (CH)', async () => {
      const image = fs.readFileSync(
        path.join(__dirname, 'images', 'REC_CH_BAG.png')
      )
      const result = await extractQRCodes({
        source: { image },
      })
      expect(result.length).toEqual(1)
      expect(result[0]).toEqual('HC1:')
    })

    it('Decode a cert from an image that has multiple QR codes', async () => {
      const image = fs.readFileSync(
        path.join(__dirname, 'images', 'multiqr.png')
      )

      const result = await extractQRCodes({
        source: { image },
      })
      expect(result.length).toEqual(2)
      expect(result[0]).toEqual(
        'HC1:6BF%RN%TSMAHN-HVUOEJPJ-QNT3BNN0II4WFC9B:OQW.7LQCCJ9T$U+OCDTU--M:UC*GP-S4FT5D75W9AAABE34L/5R3FMIA5.BR9E+-C2+86LF4MH7DANI94JBTC96FM:3DK196LFGD9+PBLTL8KES/F-1JZ.KDKL6JKX2M0ECGGBYPLR-S:G10EQ928GEQW2DVJ55M8G1A9L5TM8/H0QF6IS6G%64.U4G6PF5RBQ746B46O1N646RM93O5RF6$T61R64IM646-3AQ$95:UENEUW6646C46846OR6UF5 QVCCOE700OP D9M1MPHN6D7LLK*2HG%89UV-0LZ 2.A5:01395*CBVZ0K1H$$0VON./GZJJQU2K+5MV0GX89LN8EFJH1PCDJ*3TFH2V4IF1D 8EC7CEF172BWF4 NIREK%C-KN+JSJEU:XQ$NJMO07VBM$FW8Q:/TH7GXUU%BTMZMTKHSP5NWBZ/EOKI0*SXB1L7M$Y34IECEC7$MAWD.BO7NC.AR100000FGWZJS0MF'
      )
      expect(result[1]).toEqual(
        'HC1:6BF%RN%TSMAHN-HVUOEJPJ-QNT3BNN1C2.7JC89XW31SOM*4V75*NRZEJ*MT-MPW$NLEENKE$JDVPLZ2KD0KSKE MCTPIC.UTPI%32CCS8%MYVAZ.V3-QI%KQ*N EIS-R8%MKMI906838HJSP$I/XK$M87N96YBDQEUP8S%OM6PSC9NY8G%89-8CNND*2O%09B9$EDJ2K8FF+G9:AHGZKL105B9-NT0 2$$0X4PCY0+-C0OP D9M1MZJJQU2K+5MV0GX89LN8EFJH1PCDJ*3TFH2V4IF1D 8EC7CEFYE9*FJ+0HQC8$.AIGCY0K5$0Y.AZ1MD0H2:G%2M174Q+CJE4EX9BT1HQ1WVH/T1K%J/T15R12O1IT3H7GAJDCETO3EA4WX%QNAU 3H$+3E4GVMRY6M9CWYMDSHKDJ1/9OFMPBGE+LA%ILVQ9F6JP*1I2B3GNM*5UMB5$8Z-4-*P8IQGEPW2M000U50ZCWZ/PY2'
      )
    })

    it('Decode a cert from an image but provide an invalid image as input', async () => {
      const image = fs.readFileSync(
        path.join(__dirname, 'images', 'notanimage.pdf')
      )

      await expect(extractQRCodes({ source: { image } })).rejects.toThrowError()
    })

    it('Decode an RSA signed vaccine cert', async () => {
      const image = fs.readFileSync(
        path.join(__dirname, 'images', 'rsasignedvaccinecert.png')
      )
      const result = await extractQRCodes({
        source: { image },
      })
      expect(result.length).toEqual(1)
      expect(result[0]).toEqual(
        'HC1:NCFK60DG0/3WUWGSLKH47GO0:S4KQDITFAUO9CK-500XK0JCV496F3RAM%QU2F311U:RUY50.FK6ZK7:EDOLOPCO8F6%E3.DA%EOPC1G72A6YM88G7:W6Q46X47HA7TM8TL6SG8IS8M*8S46S46307UPC0JCZ69FVCPD0LVC6JD846Y96C463W5307+EDG8F3I80/D6$CBECSUER:C2$NS346$C2%E9VC- CSUE145GB8JA5B$D% D3IA4W5646646-96:96.JCP9EJY8L/5M/5546.96SF63KC.SC4KCD3DX47B46IL6646H*6Z/ER2DD46JH8946JPCT3E5JDLA7$Q69464W51S6..DX%DZJC3/D9Z95LEZED0ECI3D5.CNWE6VCXKEW.C9WEMY9GIA1C9:B8I3D8WE2OA3ZAGY8$PC5$CUZC$$5Y$5FBBN10U$1ZA0P-MG+M5-VUYPLWT%$77L5B%HJG3DBGV47X*F4ST0HO1JJFFRC+6XUM/.H23S2XRQ%6C45IWG9DP1SPAWJXX1TIBA3PNJ35$1%9G9YMDAWN48984+O7XC7SIRNRNR.TH/345SF0P+3JQC7ZVQY*7IZ6-WHZMM1%Q5 U9IB-AT-A1 4JFY9Q90-7N1RPKF725ONF2Q9L0V9XWS/%AOIL5U6D*QB$G0SQ%K53UV-IS.FIF8I$0VUAJLAISN6JKAM9E33O:5ACIP1UURQV9T0CLKUUC.$CD3EWGIDF7EDKUQ9Q0I.4O$ZGH1J6KPFWM8R7AJA$VBM8A67WBS1+65.I4ONUU3RVUHZOJR0EJ$K-J6N$A/WJQ+RK$5LIK :Q6RAA1'
      )
    })

    it('Decode an NI cert image 1', async () => {
      const image = fs.readFileSync(
        path.join(__dirname, 'images', 'MobileSample-0001.PNG')
      )
      const result = await extractQRCodes({
        source: { image },
      })
      expect(result.length).toEqual(1)
      expect(result[0]).toEqual(
        'HC1:NCF0Y2BM7OD0C40RFE5FQQWAH 4LLAA1F3FV*N5RSJ0XM.CP+3O 51IYNL Q:AU2.UV9DLQPFOHYZ7TBEF.KG9HPSJ347WW5IV1RX17PQOZEWAL$+UELTE$5K:FW*TKEN1OEDJR72KO:FSZ1O-G9-3R1UEI30IP4$07S3 PE*1AWBU2JCF RCATHB9L3CP OO10A95FI8%ZC0:D1L2ETBNPM2TQ$9EWZ6944$+K4M6:Y6T9BDID%6CFV05S2GLCW/M2T9ZJN*OT0EM4-H./59-S0*AOZ4:8BT0V$-8/54DPGJH8537EKQDV1 %0MBIL327ILDVDWYMM.08Z2174G2NRPG-D4FFUIIUKTROY6152US0ZTU/C43Y7 %61:AJYLU4MJQC0*66RPM 82HHH+5NXA+.5NW5%%IXCDU33SK0J*M *7:-V2A1V+N03M:14/DCI.7:VKJVJV$SNS0R0B54EO6G%9O983X%F:4FD2C%LEF:FWZDJ$3504N%J0$EG9Q6XCUAWJRK-WE'
      )
    })

    it('Decode an NI cert image 2', async () => {
      const image = fs.readFileSync(
        path.join(__dirname, 'images', 'MobileSample-0002.PNG')
      )
      const result = await extractQRCodes({
        source: { image },
      })
      expect(result.length).toEqual(1)
      expect(result[0]).toEqual(
        'HC1:NCF4W1SX78D0%20SMQABKFMK194$E102HKFVE7QT7UO%M79KHJSWG92PGL7UZ8JV$7W.9PX4+JBQBKK11-WBH2J2CMK11UTDNKDOIDOMGV2LOS3QPSH6OTVK:-IKYS+*3EZAGYR67R4%8PAMMFOWDIN%H7K7%BM5-LVWAFB6$MT3FK6JO:4RZ%E90L+V2F EG:KBCLVF8LQ25+B$ZK:$O0N6TVGK3L V6.2Q1GCN7629C+I7/GCOD7CA8Q59DQ2$3M-TM NHJVDZZG4S9GVP2B1R1NSHJDP1ZEPQBAIP5F50GL0G7IESS1BBLA8Q.0+HQHE9YICGJMB4T9B0-DFH008BRODFKKKTH12H1B%8WCT*R5UP50Z0-%JUULRVMU*ON$5KHRK%8*+IN2KB+6/+0HMPR.DLWR8X0ECKGL4QF01ZN5%K*JJX5LA%9X*DZUJAMN4-TOAO1OQQ8TZ+R9Y7%TSD7J48H5RNDYR C3QRL-Q9P*FO/V+/D8/7:VMKPT$HV3YSPUSHRVNGV:1F'
      )
    })

    it('Decode an NI cert image 3', async () => {
      const image = fs.readFileSync(
        path.join(__dirname, 'images', 'MobileSample-0003.PNG')
      )
      const result = await extractQRCodes({
        source: { image },
      })
      expect(result.length).toEqual(1)
      expect(result[0]).toEqual(
        'HC1:NCFMX1B8O8D0C40JHE*ZK09D9I2:849E3J-FU8U3TN8F4I-O6/K*+IHPS%7S%GFMIFSJK7U0MIBZP92X6%ZCWYAXR6RD2YZA0IQ138:HA$DQBX4F9JITU//R-4K5YKFMM/IA4ES2%5X7LWOGTD2:$5A*B0:TT38JI8PMF%:4LG71.2RLJHABNANYZJB92%M5:WKQAK/+2Y33*43E/SH68:NA/I78$2FCHD+KAB2U$IWPGAXQSX2-Q8XE3 BGU9DS3V6.CL-M..QPWAH6V0PH0YGSTPGONSUIBZ0$%2V37V509Q1HR3YW1 S35PVU4KF.FX00AUB4T305R..HU80O+0D9HK*A-J8HP6ZFSKOMZIOFFPJP5/LTUPMLWH5+5MHBHLR0*BVFO5KLZCIM7R.NKOSDDJU3ZI2+PJNJPVLK8E81NR27FMLA*F7:125QOQB$LR7VUKPEF1VA2AH.PL0O60W5/3:VHTUAJQOMLE56SDM1F7V$9VD*NBJ38WKY9OL-FOSN%CVCGRN$FE2SAQJ7GWGRFT3'
      )
    })

    it('Decode an NI cert image 4', async () => {
      const image = fs.readFileSync(
        path.join(__dirname, 'images', 'MobileSample-0004.PNG')
      )
      const result = await extractQRCodes({
        source: { image },
      })
      expect(result.length).toEqual(1)
      expect(result[0]).toEqual(
        'HC1:NCF4W1B8O8D0%20OC7CF3:55WE6TB4.PTN-N:EUGU3YEEDMFX28L7A4KNP1K9OSIN2.OQNG3W5PF.K5HLTGTKN9.62OIGG5TVEQSOS/ 2UUH+8N5ESJDEMWN4*NBHPHACCMR%.NQ5C9FL5%2.WO8VQ/7GZTFH*50BN*P84ER::Q6SD.3FDJQ-$N/VE8FP 3H570W844F1Z5D4488C4A4DGJPVP1V 0TUB5FAAMHK3D40K4CEHRR300VCDOXK5WGOWMC1L%+SL.KI+OT13.0A7.IW/AKL2CCM.YTDXEQ1HN*0U211.NG:BJJVI7KB1GGNR2IJ.9C%AL-J0QNCF10Y1M85V/XG3T0L30 LI1EMAE0B$0.$FNCHP8N7HG OQK5RVCD8TBINJ+7CPWAY1V9HA7+AN%J8:K0+AE0M2IHQEH5EEEI5ZICG.K6-A1HT$ F$UNTK6K:EF+5N7L-Q6:G7MRTR0B. 1I9K%XQA-85CU4+P0-2MN6K:7S.HEWA 2UF3WV+G3KUS8A5E3QN8QGU WVWG7G:VC5Q*QF'
      )
    })

    it('Decode an NI cert image 5', async () => {
      const image = fs.readFileSync(
        path.join(__dirname, 'images', 'MobileSample-0005.PNG')
      )
      const result = await extractQRCodes({
        source: { image },
      })
      expect(result.length).toEqual(1)
      expect(result[0]).toEqual(
        'HC1:NCFMX1C9QJPOC40OGEZQQZISHQ16HOD.UX0OVNCKGA37D9YPSLJZVASANPZ935EENA442OH7T T NR5Z1G72FST3XETVG+KG7116QGDLGQ%B* S/KUY*N*0697A-6H0CR$1405UL$4ZPVT*5CPV7UOQ-NUR12XBZLF3EOU6V3NL6Y6OBQCXBZTU3MRHV8//OW62*L4*P6JPG/GMYFP*NG%SOCNH7$SF/HO1L$6B8:8C.A-T1D.A/50JYKVCJ111CSDYDNUII-1J-G2VNCAT7BH5-Z50SI0JCZH6TTM:S1E20-P62DM595BS8A*URCOYI0E63HO2H4N+KCLS02ZOH52Z%HU71NDP7/EW94CB6X81ZP3QI0OWO7S9HUK4J1JP9UYGAG9APD3KPX2V4TBU1JSJ9IXQCJV*XL6Q9S%PDSH0P8XQLY5HK3494FJ5FACDQSNT.UXLT3UG/TN5TU1+9R5S5258AK:.UH1MPSAR:FRWB$4D1/F*3PJK68:N.OE:Q1-/3%/PJPP%XM5:UZJ45DF'
      )
    })
  })

  describe('Extract from a pdf', () => {
    it('Decode a vaccine cert from a pdf', async () => {
      const pdf = fs.readFileSync(
        path.join(__dirname, 'pdfs', 'vaccinecert.pdf')
      )
      const result = await extractQRCodes({ source: { pdf } })
      expect(result.length).toEqual(1)
      expect(result[0]).toEqual(
        'HC1:6BF%RN%TSMAHN-HVUOEJPJ-QNT3BNN0II4WFC9B:OQW.7LQCCJ9T$U+OCDTU--M:UC*GP-S4FT5D75W9AAABE34L/5R3FMIA5.BR9E+-C2+86LF4MH7DANI94JBTC96FM:3DK196LFGD9+PBLTL8KES/F-1JZ.KDKL6JKX2M0ECGGBYPLR-S:G10EQ928GEQW2DVJ55M8G1A9L5TM8/H0QF6IS6G%64.U4G6PF5RBQ746B46O1N646RM93O5RF6$T61R64IM646-3AQ$95:UENEUW6646C46846OR6UF5 QVCCOE700OP D9M1MPHN6D7LLK*2HG%89UV-0LZ 2.A5:01395*CBVZ0K1H$$0VON./GZJJQU2K+5MV0GX89LN8EFJH1PCDJ*3TFH2V4IF1D 8EC7CEF172BWF4 NIREK%C-KN+JSJEU:XQ$NJMO07VBM$FW8Q:/TH7GXUU%BTMZMTKHSP5NWBZ/EOKI0*SXB1L7M$Y34IECEC7$MAWD.BO7NC.AR100000FGWZJS0MF'
      )
    })

    it('Decode a vaccine cert from a pdf butr source is not a pdf', async () => {
      const pdf = fs.readFileSync(path.join(__dirname, 'pdfs', 'notapdf.png'))

      await expect(extractQRCodes({ source: { pdf } })).rejects.toThrowError()
    })

    it.skip('Decode a vaccine cert from a pdf that has 2 qr codes NIVaccinationcert', async () => {
      const pdf = fs.readFileSync(
        path.join(__dirname, 'pdfs', 'NIVaccinationcert.pdf')
      )

      const result = await extractQRCodes({ source: { pdf } })
      expect(result.length).toEqual(2)
      expect(result[0]).toEqual(
        'HC1:NCFMX1B-N*I0000HHUKXR3G6U12RYKYUOV/9NTFOVN6X9SY7N+DWH95F5L63*TNODRR.7C*J9AHRMG$131T4%RN9DO/UDEL8+LUS79$GGIEA:7O JSMNMO1C2N4-USOMNA1F :6D:51CJFTH*HA2:IU-0G8H.R0+MVW OF-UPFDX8T%U11/LUII/KA- AO.O-%1YZJ29QI70G24PRK6625HGYW8A2521TM69.ANU9A7GH$Y5/L4D24BN0I44+V0KWMN492IQA*J4LT3MPE*90MSKOM MKKHM$Q28+G H1H33BXRPR2WFDD*8TV1CXGYBK/8DJHBMB3YOE*20I-6+H7Q32F8G5AG*Y673R44QH$2IBBP A ERCJDP2HKVVBV2KVQB C%YBOKF:Y6MGQD-2U.KI K2-9:OP8IM3NANTL12SBLS9/6WMDCYR5%8YO4T.VRA7PQRQ/DP-K5JB3EMNQ2SGNQTHS-UBV7W$1.XC 5ORTNI$1CSF6$7UCQ-HD*MFDXU0:1SH2POEZ4G8FW%A5E3'
      )
      expect(result[1]).toEqual(
        'HC1:NCFMX1EM7YUO000F8CF.OHCAH%JNW0/HRGQ9J8VLFLR+70 9X9D+D4F9U1I6TC9TQF0-2CEAZE1HTHH+1-W88$R7OH.N2RU3FT87IE3549SHVPH31GVCVCCKJAE8L0/9RVXRI6UB.IG/AH9AHLQ7KD8KG/*9V+0IHPI2F REBPE8547-N.QL-N7P 8N24AO9WMMNDKUY9A668MI7DOZZ0M5A/QUJ95GUMDMH%FLXAV%OL1T3EIJ+20VQ758F-TK%%FU6S7LINOEL6IB$FRXJP791%DVI1T%EPWN/.CA31Y6CISC9+AVMTFP2$92%F8$DCVDRAC5 *TDQ1NB0Z34MK3D-0 8H424I44+ON0X3LL21+05$30.P9.DT$9LXAPLBW1M$XP P2QVRY*8ML69-COTH:E5UFD38P2 8IYPY4LFLBDBL 8EY9JYK559KX2BP8NNMEVWQ329C8SH4A*0W+RDAEFQ:1R5GKLMI4VUBPI*ESWQH:RXPE01OZKLWRA.CFOJU.2VCQV6 3 041ASN03 VF'
      )
    }, 10000)

    it.skip('Decode a vaccine cert from a pdf that has 2 qr codes NITest2', async () => {
      const pdf = fs.readFileSync(path.join(__dirname, 'pdfs', 'NiTest2.pdf'))

      const result = await extractQRCodes({ source: { pdf } })
      expect(result.length).toEqual(2)
      expect(result[0]).toEqual(
        'HC1:NCFNX1EM75VOH43JFC-XA62SGD1$:NC 5ZOVV3KVO27/NV234X2.%I277-TIK$DPTI*T66/EAP2*Y3*Q3 GUB.4QJOH52Z 9EL81CAA-2Y%V0$5UUR0:05CQI2MPIP4+F%7M24LA4W.6BV2C4/8QQ12QQQ384ZEYDKOT5F F1X96X0E*4A:TNPL3VJ.$N+UH21B7JE$B8IK9AC4-SE*9JR9HH JBHP2C6WBBP15JUATJF:QL:$F4BVET3W9G$9J-V98KFJSD-DHDEBH/TTYJ+AC.3486MBHP  QE5R*H5+AGTB8Y42G$ARPH066K978M0YO0VDRUCLTG6T92HDF GK *D.D5H74D115WG$0S$T2KAEQU0FB4%NRWMDUNK73QE0JU1C0LB-UCEG9L.6IAG5GNY0R*QKZ%ITK1UZNX05%ID%YRBZI5ONIBTRQ4  97FB-FC3$09GVXE5SCPZ:L098*2SMQR/FN+EUQ4W/T9/JBZTJR7J3KLOAU-94+7G7-SBEAY65:9S5CS67URW76$U7S6Q0IZTB.:VE 1K1866GWXGF2'
      )
      expect(result[1]).toEqual(
        'HC1:NCFNX1IM7ZPO/23KKSQEH.ZL5S1/$OSB8ZKV4:I U49KETGLP$OPBANQJ/ND4Q2ORHEBA0W19UKTK5/BF/:OFJSC68XSBA72F:8XVO$U9G3TQDG1 H7M2 ZGG 373FDPE7E7IXNTK23W7PYUMUNRJFDGS18J64V4-OGL6RS82MDC046YL WNSICCEJLZ8.44X24O$158K+1B%Y0YEMJLPSG6PVFP5JCSHYS5TUQN*AFC09.AH*868AU1LN 0%:PXCLR4J92JID3$CDPMPUI5RYL%FJCCMJLTRIIW10LI0B9PD.N0SH80O/.KPI1A1QO1LBVOOA99GVFWP261TGEZ*B730YA8DJ8* L BNNT325L+75KLPL%K BE645JT9SPD7.QMTBK.UOS2NQ1O0B:HA:HI9:GL1I*D2$JFV1JTO9O*KTH8$*8B5M%96GQ441T/QRDMODCFY6QFXBS/TPRQ O61VFM-NTZL08G:BR*6E4ZS-6E2QUGMN4QT ROQYVC0R-1TB-G0CTNCV9OE07WSJTVJ9+5QBTO %CBXVU9B40G'
      )
    }, 10000)

    it.skip('Decode a vaccine cert from a pdf that has 2 qr codes - teastas', async () => {
      const pdf = fs.readFileSync(path.join(__dirname, 'pdfs', 'Teastas.pdf'))

      const result = await extractQRCodes({ source: { pdf } })
      expect(result.length).toEqual(2)
      expect(result[0]).toEqual(
        'HC1:NCF5X3*-N8D0C40QC7K.GXGKHOOQ%OPB8.9SNDUCWNPOP828YQAV.1E9D1BUK.URPFFSVUBREG40WBYGL%YG 41OSV+R39+A$E07NGE$BG6P-KU 2W%Z1/8MDY8BWU8QOU$06UN+8JRZHEYOHV8*WSW05RHS+:1%XGKH233OVI7CKN.QH$VLI7BQX277AN$9M40YHHHN1E:AFC4KMUCX5S%QJCA:TL1.E0:H94DBJO0FE3+J+9B0OOM22820XVLF8N$$Q0/JW$0A1G/%U$U1-+K$9O%OOYNMZIDZM0T40TIHGRCH.AR-2H76XJG2*S.72JUE80LXQ9V00T$IN32AUMAEGZH9B.D4P9.8U8F12S01FWJCD6KR TDWM5X35MQT:7H2H24WQWHJY*4*-A1Y4E7IPKN-OKB51YXQQ KTY67NN:XO*769IBY3VPVVFKTO5MQ5R+.UBKQBUTR4CILO GBF*U$7HU5ORXR1CW8D314A-%7SYK.8C1.D10ISDSL6NJAF5NNENIA18IDEZDF'
      )
      expect(result[1]).toEqual(
        'HC1:NCFMX1SX78D0C40*DEY*K*6D0VDJ65G/KKFVNXO9M3+*V208L2T765.OS01S 15DP7PDTFAB:SC6H8NNB2H28WC7N9GOBR6ALO0$CC2E7JSR9YSNLV4+B1272T2UZHP-J:8V/EL/SFEY9MJFTKI4.9SRRBMQD*5UQR2THCYS/TTY.HGRDIGJUI7LS4$%R-36Q60MIPYB1*9B500Y*BJTU1+5$69:YI6QK529K/C*A3JNC7OT3ZOC 2HAG.5BJJJW:CLELXZARA31HN$ZNYLDI CZUETRCFKAWWIMK6C40D$HU708+IW87W%G$$28KK1TVQ 9X78VBC3EF-7EH10Z*QUWIVVGCAPVPDZWQYUAZOK 3DO3IM$NG$AH8HMFRXULC63AOJ$AAIYT%VN1-MK%42KF3RJ1N5VTAYL51QK$QAX$K%66P*0$7ECFMUH7IRV50H%/13.KVUTJXS4QE06CCJ3D:U4/3$0IYJCQ0F6VTL*EEE1FCDN0F +9$UG42A:N3U6WO+ELM4OI63PRS9U8K05JLY1'
      )
    }, 10000)

    it('Decode a vaccine cert from a pdf that has 2 qr codes - ni sample cert 1', async () => {
      const pdf = fs.readFileSync(
        path.join(__dirname, 'pdfs', `CovidcertNISample1.pdf`)
      )

      const result = await extractQRCodes({ source: { pdf } })
      expect(result.length).toEqual(2)
    }, 10000)

    it('Decode a vaccine cert from a pdf that has 2 qr codes - ni sample cert 2', async () => {
      const pdf = fs.readFileSync(
        path.join(__dirname, 'pdfs', `CovidcertNISample2.pdf`)
      )

      const result = await extractQRCodes({ source: { pdf } })
      expect(result.length).toEqual(2)
    }, 10000)

    it('Decode a vaccine cert from a pdf that has 2 qr codes - ni sample cert 3', async () => {
      const pdf = fs.readFileSync(
        path.join(__dirname, 'pdfs', `CovidcertNISample3.pdf`)
      )

      const result = await extractQRCodes({ source: { pdf } })
      expect(result.length).toEqual(2)
    }, 10000)

    it('Decode a vaccine cert from a pdf that has 2 qr codes - ni sample cert 4', async () => {
      const pdf = fs.readFileSync(
        path.join(__dirname, 'pdfs', `CovidcertNISample4.pdf`)
      )

      const result = await extractQRCodes({ source: { pdf } })
      expect(result.length).toEqual(2)
    }, 10000)

    it('Decode a vaccine cert from a pdf that has 2 qr codes - ni sample cert 5', async () => {
      const pdf = fs.readFileSync(
        path.join(__dirname, 'pdfs', `CovidcertNISample5.pdf`)
      )

      const result = await extractQRCodes({ source: { pdf } })
      expect(result.length).toEqual(2)
    }, 10000)

    it('Decode a vaccine cert from a pdf that has 2 qr codes - ni sample cert 6', async () => {
      const pdf = fs.readFileSync(
        path.join(__dirname, 'pdfs', `CovidcertNISample6.pdf`)
      )

      const result = await extractQRCodes({ source: { pdf } })
      expect(result.length).toEqual(2)
    }, 10000)

    it('Decode a vaccine cert from a pdf that has 2 qr codes - ni sample cert 7', async () => {
      const pdf = fs.readFileSync(
        path.join(__dirname, 'pdfs', `CovidcertNISample7.pdf`)
      )

      const result = await extractQRCodes({ source: { pdf } })
      expect(result.length).toEqual(2)
    }, 10000)

    it('Decode a vaccine cert from a pdf that has 2 qr codes - ni sample cert 8', async () => {
      const pdf = fs.readFileSync(
        path.join(__dirname, 'pdfs', `CovidcertNISample8.pdf`)
      )

      const result = await extractQRCodes({ source: { pdf } })
      expect(result.length).toEqual(2)
    }, 10000)

    it('Decode a vaccine cert from a pdf that has 2 qr codes - ni sample cert 9', async () => {
      const pdf = fs.readFileSync(
        path.join(__dirname, 'pdfs', `CovidcertNISample9.pdf`)
      )

      const result = await extractQRCodes({ source: { pdf } })
      expect(result.length).toEqual(2)
    }, 10000)

    it('Decode a vaccine cert from a pdf that has 2 qr codes - ni sample cert 10', async () => {
      const pdf = fs.readFileSync(
        path.join(__dirname, 'pdfs', `CovidcertNISample10.pdf`)
      )

      const result = await extractQRCodes({ source: { pdf } })
      expect(result.length).toEqual(2)
    }, 10000)

    it('Decode when no input provided', async () => {
      const result = await extractQRCodes({ source: {} })
      expect(result.length).toEqual(0)
    })
  })
})
