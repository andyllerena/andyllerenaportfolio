import Header from '@/components/Header';
import WorkSection from '@/components/WorkSection';
import SkillsSection from '@/components/SkillsSection';
import VirusWatcherSection from '@/components/VirusWatcherSection';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <>
      <Header />
      <WorkSection />
      <SkillsSection />
      <VirusWatcherSection />
      <ContactForm />
    </>
  );
}
