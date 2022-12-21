import { Container, Image, Text } from "@nextui-org/react";
export default function Header({ title }) {
  return (
    <Container direction="row" alignContent="space-around">
    <Image
          src="./imaicon.png"
          alt="Default Image"
          width={50}
          height={50}
        />
      <Text h1>{title}</Text>
    </Container>
  );
}
