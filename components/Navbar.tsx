import styles from "../src/styles/Navbar.module.scss"
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import logo from "../public/logo.png"

const navigation = [
    { id: 1, title: 'Home', path: '/'},
    { id: 3, title: 'Пополнить', path: '/contacts'},
]

const Navbar = () => {
    const {pathname} = useRouter();
    return (
    <nav className={styles.nav} style={{backgroundColor:"lightsteelblue"}}>
        <div className={styles.logo}>
            <Image src={logo} width={100} height={100} alt="logo"/>
        </div>
        <div className={styles.links}>
            {navigation.map(({id, title, path}) => (
                <Link key={id} href={path}> 
                    <h3 className={pathname === path ? styles.active : undefined}>{title}</h3> 
                </Link>
            ))}
        </div>
    </nav>
    )
  }
  
  export default Navbar;