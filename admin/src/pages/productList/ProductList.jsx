import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteProduct, getProducts } from '../../redux/apiCalls';

function ProductList() {

    const dispatch = useDispatch();
    const products = useSelector(state => state.product.products);

    useEffect(() => {
        getProducts(dispatch);
    },[dispatch])

    const handleDelete = (id) => {
      deleteProduct(id, dispatch);
    };

    const columns = [
        { field: '_id', headerName: 'ID', width: 220 },
        { field: 'product', headerName: 'Product', width: 200, renderCell: (params)=> {
            return (
                <div className='productListUser flex items-center'>
                    <img className='productListImage w-8 h-8 rounded-full object-cover mr-10' src={params.row.img} alt='userProfilePic'/>
                    {params.row.title}
                </div>
            )
        }},
        { field: 'inStock', headerName: 'Stock', width: 200 },
        { field: 'price',headerName: 'Price', width: 160 },
        { field: 'action', headerName: 'Action', width: 150, renderCell: (params) => {
            return (
                <>
                <Link to={'/product/' + params.row._id}>
                    <button className='product-list-edit mr-10 cursor-pointer'>Edit</button>
                </Link>
                    <DeleteOutlineIcon className='product-list-delete cursor-pointer text-red-500' onClick={() => handleDelete(params.row._id)}/>
                </>
            )
        }}
      ];

  return (
    <div className="product-list flex-[4]">
        <DataGrid
        rows={products}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        checkboxSelection
        pageSize={10}
      />
    </div>
  )
};

export default ProductList;