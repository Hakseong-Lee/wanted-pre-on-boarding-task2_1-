import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { GetAllCarsApi, GetSegmentApi } from '../apis/api';
import { segmentCategory, segmentType, fuelType } from '../components/segment';
import { commaSeperator } from '../components/commaSeperator';

function MainPage() {
  const [carList, setCarList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAllCars = async () => {
    try {
      const allCarsData = await GetAllCarsApi();
      setCarList(allCarsData.data.payload);
      setIsLoading(false);
    } catch (err) {
      alert(err);
    }
  };

  const getCarsWithSegment = async type => {
    try {
      const CarsWithSegmentData = await GetSegmentApi(type);
      setCarList(CarsWithSegmentData.data.payload);
      setIsLoading(false);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    getAllCars();
  }, []);
  return (
    <MainSection>
      <MainContainer>
        <CategoryContainer>
          <Label>
            <CategoryForm
              name="segment"
              type="radio"
              defaultChecked
              onChange={() => {
                setIsLoading(true);
                getAllCars();
              }}
            ></CategoryForm>
            <FormText>전체</FormText>
          </Label>
          {segmentCategory.map(seg => {
            return (
              <Label key={seg.name}>
                <CategoryForm
                  name="segment"
                  type="radio"
                  onChange={() => {
                    setIsLoading(true);
                    getCarsWithSegment(seg.type);
                  }}
                ></CategoryForm>
                <FormText>{seg.name}</FormText>
              </Label>
            );
          })}
        </CategoryContainer>
        <ListContainer>
          {isLoading ? (
            <Loading>불러오는 중</Loading>
          ) : carList.length !== 0 ? (
            carList.map(carInfo => {
              return (
                <StyledLink
                  key={carInfo.id}
                  to="/detail"
                  state={{ carInfo: carInfo }}
                >
                  <List>
                    <ListInfoContainer>
                      <ListInfoTitleContainer>
                        <ListInfoTitle>{carInfo.attribute.brand}</ListInfoTitle>
                        <ListInfoTitle>{carInfo.attribute.name}</ListInfoTitle>
                      </ListInfoTitleContainer>
                      <ListInfo>
                        {`${segmentType[carInfo.attribute.segment]} / ${
                          fuelType[carInfo.attribute.fuelType]
                        }`}
                        <br />
                        {`월 ${commaSeperator(carInfo.amount)}원 부터`}
                      </ListInfo>
                    </ListInfoContainer>
                    <ListItemImgContainer>
                      <ListItemImg src={carInfo.attribute.imageUrl} />
                    </ListItemImgContainer>
                  </List>
                </StyledLink>
              );
            })
          ) : (
            <Loading>차량이 없습니다.</Loading>
          )}
        </ListContainer>
      </MainContainer>
    </MainSection>
  );
}

const MainSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const MainContainer = styled.article`
  width: 450px;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: scroll;
`;

const CategoryContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 12px;
  flex-wrap: nowrap;
  overflow-x: auto;
  border-bottom: 1px solid;
`;

const Label = styled.label`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;

  &:hover {
    cursor: pointer;
  }
`;

const FormText = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  width: 62px;
  height: 27px;
  background: #d9d9d9;
  border-radius: 62px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const CategoryForm = styled.input.attrs({ type: 'radio' })`
  &:checked {
    display: none;
  }
  &:checked + ${FormText} {
    background: #000000;
    color: #fff;
  }
  display: none;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  overflow-y: auto;
`;

const List = styled.div`
  padding: 25px 21px;
  display: flex;
  border-bottom: 1px solid;
  justify-content: space-between;
`;

const ListInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ListInfoTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
`;

const ListInfoTitle = styled.h2`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
`;

const ListInfo = styled.h3`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
`;

const ListItemImgContainer = styled.div`
  width: 50%;
  height: 100%;
  background-color: #d9d9d9;
`;

const ListItemImg = styled.img`
  width: 100%;
  height: 100%;
  background-color: #d9d9d9;
`;

const Loading = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 21px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: black;
  }
`;

export default MainPage;
