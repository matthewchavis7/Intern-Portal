import {
  Container,
  Card,
  Flex,
  Grid,
  TextField,
  Button,
} from "@radix-ui/themes";
import { login, signup } from "./actions";

export default function page() {
  return (
    <Container position="relative" width="100vw" height="100vh">
      <Flex height="100%" align="center" justify="center">
        <Card>
          <form>
            <Grid gap="2">
              <TextField.Root
                placeholder="Email"
                id="email"
                name="email"
                type="email"
                required
              ></TextField.Root>
              <TextField.Root
                placeholder="Password"
                id="password"
                name="password"
                type="password"
                required
              ></TextField.Root>
              <Button formAction={login}>Log in</Button>
              <Button formAction={signup}>Sign up</Button>
            </Grid>
          </form>
        </Card>
      </Flex>
    </Container>
  );
}
