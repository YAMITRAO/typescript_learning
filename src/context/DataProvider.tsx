import DataContext,{DataContext_Int }from "./DataContext"

interface MyComponentProps{
  children: React.ReactNode
}



const DataProvider:React.FC<MyComponentProps> = ({children}) => {
  let value: DataContext_Int = {
    totalPayer: ["user1", "user2", "user3", "user4"],
  }
  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider