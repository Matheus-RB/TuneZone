interface Props {
  data: string[];
}

const AboutItem = ({data}:Props) => {
  return (
    <div>
      <h2 className="font-bold">About this item</h2>
      <ol className="list-disc pl-[19px]">
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  )
}

export default AboutItem