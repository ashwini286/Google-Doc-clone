import styles from './navbar.module.css'
import { FcDocument } from 'react-icons/fc';
import {AiOutlineStar} from 'react-icons/ai';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import { SiGooglemeet} from 'react-icons/si';
import {IoMdArrowDropdown} from 'react-icons/io';
import {BiLockAlt} from 'react-icons/bi';
import {CgProfile} from 'react-icons/cg'
// import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
// import TextSnippetIcon from '@mui/icons-material/TextSnippet';
export default function Nav(){

    return(
      <div className={styles.nev1}>
<FcDocument 
style={{fontSize: "4rem",
color: "rgb(21, 127, 247)",
margin: "10px"
// GrDocumentText


}}/>
<p className={styles.uni}>Unitled document</p>
<AiOutlineStar className={styles.star}/>
<ul className={styles.contanier}>
  <li className={styles.menu}>File</li>
  <li className={styles.menu}>Edit</li>
  <li className={styles.menu}>View</li>
  <li className={styles.menu}>Insert</li>
  <li className={styles.menu}>Format</li>
  <li className={styles.menu}>Tools</li>
  <li className={styles.menu}>Extensions</li>
  <li className={styles.menu}>Help</li>
</ul>

<div className={styles.rightSide}>
<InsertCommentIcon className={styles.insert}/>
<div className={styles.meet}>

<SiGooglemeet className={styles.googleMeet}/>
<IoMdArrowDropdown className={styles.ArrowDrop} />
</div>


<div className={styles.share}>
<BiLockAlt className={styles.bilo} />
<span className={styles.shr}>Share</span>
</div>

<CgProfile className={styles.profile} />
</div>
      </div>
      //  color: rgb(21, 127, 247);
         
       

          
        
    )
}