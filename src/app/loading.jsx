import Image from "next/image";

export default function loading() {
  return (
    <div className="flex justify-center items-center py-12">
        <Image width={150} height={150} alt="is loading" src={"/loading.svg"} />
    </div>
  )
}
