import Image from "next/image";


export default function Icon(props:{src:string, alt:string , size:number }) {

    const {src, alt,size}=props
  return <Image src={src} width={size} height={size} alt={alt}></Image>;
}
