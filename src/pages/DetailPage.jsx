import { React } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { commaSeperator } from '../components/commaSeperator';
import { segmentType, fuelType } from '../components/segment';

function DetailPage() {
  const location = useLocation();
  const carInfo = location.state.carInfo;
  console.log(carInfo);
  return (
    <Section>
      <Container>
        <CarImgContatiner>
          <CarImg src={carInfo.attribute.imageUrl} />
        </CarImgContatiner>
        <TilteContainer>
          <CarBrand>{carInfo.attribute.brand}</CarBrand>
          <CarNmae>{carInfo.attribute.name}</CarNmae>
        </TilteContainer>
        <CarInfoContainer>
          <MonthlyPay>{`월 ${commaSeperator(carInfo.amount)} 원`}</MonthlyPay>
          <CarInfoTitleContainer>
            <CarInfoTitle>차량 정보</CarInfoTitle>
          </CarInfoTitleContainer>
          <CarInfoBox>
            <CarInfoSubTitle>차종</CarInfoSubTitle>
            <CarInfoText>{segmentType[carInfo.attribute.segment]}</CarInfoText>
          </CarInfoBox>
          <CarInfoBox>
            <CarInfoSubTitle>연료</CarInfoSubTitle>
            <CarInfoText>{fuelType[carInfo.attribute.fuelType]}</CarInfoText>
          </CarInfoBox>
          <CarInfoBox>
            <CarInfoSubTitle>이용 가능일</CarInfoSubTitle>
          </CarInfoBox>
          <CarInfoTitleContainer>
            <CarInfoTitle>차량 정보</CarInfoTitle>
          </CarInfoTitleContainer>
        </CarInfoContainer>
      </Container>
    </Section>
  );
}

const Section = styled.section`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

const Container = styled.article`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: scroll;
`;

const CarImgContatiner = styled.div``;

const CarImg = styled.img`
  width: 100%;
`;

const TilteContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-self: flex-start;
`;

const CarInfoContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 14px;
`;

const CarInfoBox = styled.div`
  display: flex;
  padding: 0 18px;
  justify-content: space-between;
`;

const CarInfoTitleContainer = styled.div`
  height: 48px;
  background: #0094ff;
  color: #fff;
`;

const CarInfoSubTitle = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 21px;
`;

const CarInfoText = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 21px;
`;

const CarInfoTitle = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 48px;
  padding-left: 20px;
`;

const CarNmae = styled.h1`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  Line height: 29px;
`;
const CarBrand = styled.h2`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  Line height: 24px;
`;

const MonthlyPay = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 21px;
  align-self: flex-end;
  padding-right: 22px;
`;
export default DetailPage;
