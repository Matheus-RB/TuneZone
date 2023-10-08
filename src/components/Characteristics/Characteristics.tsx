interface Props {
  data: {
    color?: string;
    brand?: string;
    top_material?: string;
    body_material?: string;
    back_material?: string;
    neck_material?: string;
    fretboard_material?: string;
    guitar_pickup?: string;
    string_material?: string;
    hand_orientation?: string;
    scale_length?: number;
    number_strings?: number;
    dimensions?: string;
  };
  className?: string;
}


const Characteristics = ({ data, className }: Props) => {
  return (
    <div className={className}>
      <p><b>Color:</b> {data.color}</p>
      <p><b>Brand:</b> {data.brand}</p>

      {data.top_material && (
        <p><b>Top Material Type:</b> {data.top_material}</p>
      )}

      {data.body_material && (
        <p><b>Body Material:</b> {data.body_material}</p>
      )}

      {data.back_material && (
        <p><b>Back Material Type:</b> {data.back_material}</p>
      )}

      {data.neck_material && data.neck_material.length > 0 && (
        <p><b>Neck Material Type:</b> {data.neck_material}</p>
      )}

      {data.fretboard_material && (
        <p><b>Fretboard Material Type:</b> {data.fretboard_material}</p>
      )}

      {data.guitar_pickup && (
        <p><b>Guitar Pickup Configuration:</b> {data.guitar_pickup}</p>
      )}

      {data.string_material && (
        <p><b>String Material Type:</b> {data.string_material}</p>
      )}

      {data.hand_orientation && (
        <p><b>Hand Orientation:</b> {data.hand_orientation}</p>
      )}

      {data.number_strings && (
        <p><b>Number of Strings:</b> {data.number_strings}</p>
      )}

      {data.scale_length && (
        <p><b>Scale Length:</b> {data.scale_length}</p>
      )}

      {data.dimensions && (
        <p><b>Product Dimensions:</b> {data.dimensions}</p>
      )}
    </div>
  );
}

export default Characteristics