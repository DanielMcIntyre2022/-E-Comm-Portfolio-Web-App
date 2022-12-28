import { DataGrid } from '@mui/x-data-grid';

function UserList() {

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'username', headerName: 'Username', width: 200 },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'status', headerName: 'Status', width: 120 },
        { field: 'transaction',headerName: 'Transaction Total', width: 160 },
      ];
      
      const rows = [
        { 
            id: 1, 
            username: 'Jon Snow', 
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfrCRZY-C1hrAm9VlqOPjWkN5vFRYvqCShRg&usqp=CAU',
            email: 'test@testemail.com',
            status: 'active',
            transaction: '$120'
        },
        { 
            id: 2, 
            username: 'Jon Snow', 
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfrCRZY-C1hrAm9VlqOPjWkN5vFRYvqCShRg&usqp=CAU',
            email: 'test@testemail.com',
            status: 'active',
            transaction: '$120'
        },
        { 
            id: 3, 
            username: 'Jon Snow', 
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfrCRZY-C1hrAm9VlqOPjWkN5vFRYvqCShRg&usqp=CAU',
            email: 'test@testemail.com',
            status: 'active',
            transaction: '$120'
        },

    ];

  return (
    <div className="user-list flex-[4_4_0%]">
       <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
      />
    </div>
  )
}

export default UserList;