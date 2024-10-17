type IListProps = {
  data: any[];
  resourceName: string;
  ItemComponent: any;
}

const List = ({data, resourceName, ItemComponent}: IListProps) => {
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