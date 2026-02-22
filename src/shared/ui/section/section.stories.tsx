import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
  SectionContent,
} from "./index";

const meta: Meta<typeof Section> = {
  title: "UI/Section",
  component: Section,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Section>;

export const Default: Story = {
  render: () => (
    <Section>
      <SectionContent>
        <p className="text-sm text-[color:var(--color-ink)]">
          Section content without header.
        </p>
      </SectionContent>
    </Section>
  ),
};

export const WithHeader: Story = {
  render: () => (
    <Section>
      <SectionHeader>
        <SectionTitle>Section title</SectionTitle>
        <SectionDescription>
          Optional description for this section.
        </SectionDescription>
      </SectionHeader>
      <SectionContent>
        <p className="text-sm text-[color:var(--color-ink)]">
          Main content goes here.
        </p>
      </SectionContent>
    </Section>
  ),
};

export const MultipleSectionsStacked: Story = {
  render: () => (
    <div className="space-y-6">
      <Section>
        <SectionHeader>
          <SectionTitle>First section</SectionTitle>
        </SectionHeader>
        <SectionContent>
          <p className="text-sm text-[color:var(--color-ink)]">Content one.</p>
        </SectionContent>
      </Section>
      <Section>
        <SectionHeader>
          <SectionTitle>Second section</SectionTitle>
        </SectionHeader>
        <SectionContent>
          <p className="text-sm text-[color:var(--color-ink)]">Content two.</p>
        </SectionContent>
      </Section>
      <Section>
        <SectionHeader>
          <SectionTitle>Third section</SectionTitle>
        </SectionHeader>
        <SectionContent>
          <p className="text-sm text-[color:var(--color-ink)]">Content three.</p>
        </SectionContent>
      </Section>
    </div>
  ),
};
