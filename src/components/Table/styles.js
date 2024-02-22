import styled from "styled-components";

export const Container = styled.div`
max-width: 113rem;
margin: 0 auto;


`

export const TableContainer = styled.table`
 border-collapse: collapse;
  width: 100%;
  
  font-family: 'Roboto';
  font-size: 1.4rem;
  line-height:2.2rem ;
  font-weight: 400;

  >tbody tr td,
  thead tr th{
    border: 1px solid #192227;
    padding: 1.6rem 2.4rem;
  }
  thead tr th{
    color: ${({ theme }) => theme.COLORS.WHITE_300};
    font-weight: 700;
  }
  >tbody tr td{
  color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY_COLOR};
  :nth-child(2){
    cursor: pointer;
    :hover{
      font-size: 1.8rem;
    }
  }
  >span{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }
  >  label{
    padding: 1.2rem  1.6rem;
    background-color: transparent ;
    color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY_COLOR};
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 8px;
    display: flex;
    align-items: center;
    >select{
      background-color: transparent ;
      color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY_COLOR};

    >option{
     background-color: ${({ theme }) => theme.COLORS.SECONDARY_BG};

    }
  }

  }
  }


`