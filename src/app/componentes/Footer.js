import Link from "next/link";
import Image from "next/image";
import Style from "./footer.module.css";
export default function Footer(){
    return(
        <footer className={Style.rodape}>
            <Image
            width={100}
            height={100}
            src={"https://moodle.org/theme/moodleorg/pix/moodle_logo_TM.svg"}/>
        </footer>
    );
};