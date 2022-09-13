import { Typography } from '@mui/material';
import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';

export const JournalPage = () => {
  return (
    <JournalLayout>

      {/* <Typography variant='p'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam excepturi in nam sed cupiditate quidem, placeat quis inventore hic enim vero nobis atque distinctio tempore maiores? Eos commodi libero enim.
      Facilis obcaecati quas sapiente cumque, quisquam quos eius id quod fugiat velit iure eum hic consectetur incidunt nemo voluptas ratione laudantium deleniti a? Facere, quidem dolores iste beatae amet enim.
      Corrupti ut rerum sint repudiandae, itaque amet magni dolore similique consequuntur. Quas rem laborum iusto nostrum, perspiciatis, nesciunt nobis est, iste nihil cumque reiciendis velit! Harum, impedit aperiam? Quo, voluptate!
      Impedit obcaecati neque cumque praesentium doloribus natus, magni tempore magnam cupiditate repudiandae ea saepe rem, commodi porro eius eos. Laborum corrupti maxime quidem quia nobis vel dicta quas harum architecto.
      Eius enim ea delectus deleniti incidunt quisquam reprehenderit accusantium, ducimus magnam quaerat odit praesentium sapiente culpa dignissimos cum, illum assumenda, perferendis aliquam laboriosam vero voluptatem veritatis. Ducimus dolorum iure dolore. </Typography> */}

      {/* <NothingSelectedView /> */}
      <NoteView/>
    </JournalLayout>
  );
};
