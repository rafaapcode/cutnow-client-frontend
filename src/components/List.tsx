type IListProps = {
  data: any[];
  resourceName: string;
  ItemComponent: any;
  errorMessage?: string;
}

const List = ({data, resourceName, ItemComponent, errorMessage}: IListProps) => {
  if(!data) {
    return (
      <>
        <h2 className="text-2xl">{errorMessage}</h2>
      </>
    )
  }

  if(data.length === 0) {
    return (
      <>
        <h2 className="text-2xl">{errorMessage}</h2>
      </>
    )
  }

  return (
    <>
      {
        data.map((item, index) => (
          <ItemComponent key={index} { ...{ [resourceName]: item } } />
        ))
      }
    </>
  )
}

export default List