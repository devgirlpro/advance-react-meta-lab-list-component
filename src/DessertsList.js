function DessertsList(props) {
  // Implement the component here.
  const LowClrDsrt = props.data
    .filter((dsrt) => {
      return (
        dsrt.calories < 500
      )
    })
    .sort((a, b) => {
      return (
        a.calories - b.calories
      )
    })
    .map((dsrt) => {
      return (
        <li>{dsrt.name} - { dsrt.calories }</li>
    )
    })
   
  return (
    <ol>
      {LowClrDsrt}
    </ol>
  );
}

export default DessertsList;
