import {
  Container,
  LongWidthContainer,
  SmallWidthContainer,
  SpanContainer,
} from "./components";
import { Typography } from "../../../../sharedComponents/atoms";

export const ShippingPage = () => {
  return (
    <Container>
      <Typography variant="h4">Shipping details</Typography>
      <form action="">
        <SpanContainer>
          <SmallWidthContainer>
            <label htmlFor="firstname"> Firstname: </label>
            <input type="text" />
          </SmallWidthContainer>
          <SmallWidthContainer>
            <label htmlFor="lastname"> Lastname: </label>
            <input type="text" />
          </SmallWidthContainer>
        </SpanContainer>

        <LongWidthContainer>
          <label htmlFor="lastname"> Adress 1: </label>
          <input type="text" />
        </LongWidthContainer>
        <LongWidthContainer>
          <label htmlFor="lastname"> Adress 2: </label>
          <input type="text" />
        </LongWidthContainer>

        <select name="" id="">
          <option value="">United States</option>

          {[1, 2, 3, 4, 5, 6].map((country, index) => (
            <option key={index}>{country}</option>
          ))}
        </select>

        <LongWidthContainer>
          <label htmlFor="street-address">Street address:</label>
          <input type="text" placeholder="House number" />
        </LongWidthContainer>

        <LongWidthContainer>
          <input
            type="text"
            placeholder="Apartment, suite, unit etc (optional)"
          />
        </LongWidthContainer>

        <LongWidthContainer>
          <label htmlFor="town">Town / City:</label>
          <input type="text" />
        </LongWidthContainer>

        <LongWidthContainer>
          <label htmlFor="postcode">Postcode / ZIP:</label>
          <input type="text" />
        </LongWidthContainer>

        <SpanContainer>
          <SmallWidthContainer>
            <label htmlFor="phone">Phone:</label>
            <input type="text" />
          </SmallWidthContainer>
          <SmallWidthContainer>
            <label htmlFor="email">Email address:</label>
            <input type="text" />
          </SmallWidthContainer>
        </SpanContainer>
      </form>
    </Container>
  );
};
