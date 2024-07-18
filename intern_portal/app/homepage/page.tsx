import { Card, Container, Flex, Heading, Text } from "@radix-ui/themes";
import { createClient } from "@/utils/supabase/server";

export default async function HomePage() {
  const supabase = createClient();

  // Fetching data from Supabase can be handled here if needed
  // const { data, error } = await supabase.from("organizations").select();
  // console.log("🚀 ~ HomePage ~ error:", error);
  // console.log("🚀 ~ HomePage ~ data:", data);

  return (
    <Container py="4" style={{ padding: "150px" }}>
      <Card size="4">
        <Flex gap="4" direction="column">
          {/* Welcome Message */}
          <Heading>Welcome to the STEM Intern Program!</Heading>

          {/* Program Overview */}
          <Heading size="3">Program Overview</Heading>
          <section>
            <Text style={{ marginTop: "2rem" }}>
              This program offers a unique opportunity for STEM students to gain
              valuable experience in their fields of study. Throughout this
              internship, you will have access to mentorship, training
              opportunities, and networking designed to support your personal
              and professional development.
            </Text>
          </section>
        </Flex>
      </Card>

      {/* Akima History */}
      <Card size="4">
        <Flex gap="4" direction="column">
          <Heading size="3">About Akima</Heading>
          <ul>
            Akima is a trusted federal contractor with a portfolio of small
            businesses that delivers mission support across specialties like IT,
            systems engineering, facilities and ground logistics, aerospace
            solutions, and more.
          </ul>
          <li style={{ marginTop: "0.5rem" }}>
            <strong>Industry Leader: </strong>
            In 2023, Akima ranked #34 on Washington Technology’s Top 100 List
            and has remained in the top 70 of Bloomberg Government’s BGOV200
            list of top federal contractors since 2021.
          </li>
          <li style={{ marginTop: "0.5rem" }}>
            <strong>Global Impact: </strong>
            Akima operates throughout the United States and around the world,
            ensuring we’re everywhere our customers need us.
          </li>
          <li style={{ marginTop: "0.5rem" }}>
            <strong>10,000 Employees: </strong>
            Over 10,000 employees and a portfolio of successful businesses form
            the backbone of our brand.
          </li>

          <section style={{ marginTop: "1rem" }}>
            <Heading size="2">Akima Heritage</Heading>
            <ul style={{ marginTop: "0.5rem" }}>
              For 10,000 years, the people of the NANA region successfully
              fought for survival in one of the harshest environments on earth.
              When faced with the challenges that modernization, globalization,
              and changes in climate brought, they continued that success,
              forming enterprises that would help them thrive in the modern
              world. The work they do through Akima allows them to prosper in
              both traditional Iñupiat subsistence living and in modern life,
              and to <strong>“walk in two worlds with one spirit.”</strong>
            </ul>
            <ul style={{ marginTop: "0.5rem" }}>
              The Iñupiat live by three core principles that govern both their
              traditional way of life and the way we do business:
            </ul>
            <li style={{ marginTop: "0.5rem" }}>
              Honesty and Integrity Govern our Activities
            </li>
            <li style={{ marginTop: "0.5rem" }}>
              Commitments Made Will be Fulfilled
            </li>
            <li style={{ marginTop: "0.5rem" }}>
              Everyone Will be Treated with Dignity and Respect
            </li>

            <ul style={{ marginTop: "0.5rem" }}>
              To learn more, visit <strong>Akima.com </strong>
            </ul>
          </section>
        </Flex>
      </Card>

      {/* Message from Bill Monet */}
      <Card size="4">
        <Flex gap="4" direction="column">
          <section>
            <Heading size="3">Message from Bill Monet</Heading>
            <ul style={{ marginTop: "1rem" }}>
              Over the coming weeks, you wil have the opportunity to work with
              some of the best and brightest in our industry. You wil contribute
              to meaningful projects that impact our customers, our employees,
              and our shareholders.
              <ul style={{ marginTop: "1rem" }}>
                I urge you to take initiative, ask questions, and seize
                opportunities to learn as much as you can. Your time with us is
                limited, therefore I encourage you to:
              </ul>
            </ul>
            <li style={{ marginTop: "1rem" }}>
              <strong>Share new ideas.</strong> Each of you possess unique
              skills and mindsets. Share your interests and viewpoints with your
              coworkers - we value our people's unique perspectives.
            </li>
            <li style={{ marginTop: "1rem" }}>
              <strong>Get involved.</strong> Volunteer for projects, activities,
              and assistance to others.
            </li>
            <li style={{ marginTop: "1rem" }}>
              <strong>Learn by listening.</strong> Whether you support external
              or internal customers, it's important to understand their needs in
              oder to deliver the best solutions.
            </li>
            <li style={{ marginTop: "1rem" }}>
              <strong>
                Focus on the details, but don't lose sight of the big picture.
              </strong>{" "}
              Know your team's ultimate goals and seek to understand how your
              work helps reach that goal.
            </li>
            <li style={{ marginTop: "1rem" }}>
              <strong>Build relationships.</strong> You will find throughout
              your career, it's the people you meet along the way that open
              doors and make experiences more meaningful.
            </li>
            <li style={{ marginTop: "1rem" }}>
              <strong>
                Be open to new ideas, perspectives, and possibilites.
              </strong>{" "}
              Treat every aspect of your internship at Akima as an opportunity
              to learn, as all the above elements are crucial for personal and
              professional growth. Our organization will surely benefit from
              your contributions; we trust you will enjoy your summer and make
              every moment count. Best regards, William Monet President & CEO
              Akima, LLC
            </li>
          </section>
        </Flex>
      </Card>
    </Container>
  );
}
