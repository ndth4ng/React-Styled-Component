import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import { rows } from "../dummyData";
import Footer from "../components/Footer";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const TableWrapper = styled.table`
  width: 70%;
  padding: 20px;
`;

const DeleteButton = styled(DeleteOutlineIcon)`
  color: red;
  cursor: pointer;
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
`;

export const ItemImg = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 20px;
`;

const AddToCartButton = styled.button`
  cursor: pointer;
  width: 200px;
  background-color: teal;
  color: white;
  border-radius: 20px;
  border: none;
  padding: 5px;
`;

const Wishlist = () => {
  const columns = [
    {
      field: "id",
      headerName: "",
      width: 50,
      disableColumnMenu: true,
      sortable: false,
      headerAlign: "center",
      renderCell: (params) => {
        return <DeleteButton />;
      },
    },
    {
      field: "title",
      headerName: "Product",
      disableColumnMenu: true,
      width: 300,
      renderCell: (params) => {
        return (
          <ListItem>
            <ItemImg src={params.row.img} alt="" />
            {params.row.title}
          </ListItem>
        );
      },
    },
    {
      field: "price",
      headerName: "Unit Price",
      headerAlign: "center",
      disableColumnMenu: true,
      minWidth: 200,
    },
    {
      field: "inStock",
      headerName: "Stock Status",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      headerAlign: "center",
      disableColumnMenu: true,
      minWidth: 200,
    },
    {
      field: "add",
      headerName: "",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      disableColumnMenu: true,
      minWidth: 200,
      renderCell: (params) => {
        return <AddToCartButton>Add to cart</AddToCartButton>;
      },
    },
  ];

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>MY WISHLIST</Title>
        <TableWrapper>
          <DataGrid
            columns={columns}
            rows={rows}
            rowHeight={100}
            pageSize={5}
            rowsPerPageOptions={[5]}
            getRowClassName
            disableSelectionOnClick
            autoHeight
          />
        </TableWrapper>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Wishlist;
