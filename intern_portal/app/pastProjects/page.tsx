"use client";
import { Card, Container, Flex, Heading, Text } from "@radix-ui/themes";

export default async function PastProjects() {
  return (
    <Container py="4" style={{ padding: "150px" }}>
      <Card size="4">
        <Flex gap="4" direction="column">
          <Heading>
            2024 Akima STEM Interns Capstone Project: XR Building Experience
          </Heading>
        </Flex>
      </Card>
      <Card size="4">
        <Flex gap="4" direction="column">
          <section>
            <Heading size="4">Project Overview</Heading>
            <ul style={{ marginTop: "1rem" }}>
              The XR Building Experience aims to create an immersive,
              collaborative virtual environment for construction planning and
              teamwork. Utilizing the Meta Quest 3, this application merges the
              digital and physical worlds, offering a revolutionary platform for
              architectural design and engineering education.
              <Heading size="4" style={{ marginTop: "1rem" }}>
                Core Features:{" "}
              </Heading>
            </ul>
            <li style={{ marginTop: "1rem" }}>
              <strong>Real-World Integration: </strong> Through camera
              pass-through technology, users can overlay virtual construction
              elements onto the real world, blending digital creations with
              physical spaces. This also enables users to project their virtual
              constructions onto physical construction sites (local to them).
            </li>
            <li style={{ marginTop: "1rem" }}>
              <strong>Collaborative Environment: </strong> Up to 20 participants
              can join the virtual space simultaneously, each represented by a
              customizable 3D avatar. This feature supports seamless visual and
              auditory interactions among users, facilitating teamwork and
              collaborative design processes.
            </li>
            <li style={{ marginTop: "1rem" }}>
              <strong>Global Accessibility: </strong> The application is
              accessible to users worldwide, requiring only a stable internet
              connection. This global reach encourages diverse team compositions
              and cross-cultural collaborations.
            </li>
            <li style={{ marginTop: "1rem" }}>
              <strong>Interactive Building Components:</strong> Users can select
              from a wide range of building materials (e.g., lumber, sheet
              goods, cinder blocks) and pre-fabricated elements (e.g., walls,
              roofs). Materials can be resized dynamically (e.g., lumber
              adjusting to specific dimensions like 2x4x83.5 inches) to match
              design specifications.
            </li>
            <li style={{ marginTop: "1rem" }}>
              <strong>Creative Freedom: </strong> Participants have the liberty
              to position and manipulate building materials within the virtual
              space, encouraging experimentation and innovative design
              solutions.
            </li>
            <Heading size="4" style={{ marginTop: "2rem" }}>
              Conclusion:
            </Heading>
            <ul style={{ marginTop: "1rem" }}>
              This capstone project not only aims to foster a hands-on
              understanding of architectural and engineering concepts among STEM
              interns but also seeks to pioneer new methods of collaborative
              design and construction planning. By bridging virtual and physical
              realms, the XR Building Experience sets the stage for the future
              of construction, education, and teamwork.
            </ul>
          </section>
        </Flex>
      </Card>
      {/* Comments from past interns */}
      <Card size="4">
        <Flex gap="4" direction="column">
          <section>
            <Heading size="3">Comments from Past Interns</Heading>
            <ul style={{ marginTop: "1rem" }}>
              <li>Placeholder for comments from past interns...</li>
              {/* render actual comments dynamically here  */}
            </ul>
          </section>
        </Flex>
      </Card>

      {/* Dropdown to view more past projects */}
      <Card size="4">
        <Flex gap="4" direction="column">
          <section>
            <Heading size="3">More Past Projects</Heading>
            <select
              style={{ marginTop: "1rem" }}
              onChange={(e) => {
                const selectedProject = e.target.value;
                console.log("Selected project:", selectedProject);
              }}
            >
              <option value="">Select a project to view</option>
              <option value="project1">2025 Project</option>
              <option value="project2">2026 Project</option>
              <option value="project3">2027 Project</option>
              {/* add more options as needed */}
            </select>
          </section>
          {/*add a section with photos */}
        </Flex>
      </Card>
    </Container>
  );
}
