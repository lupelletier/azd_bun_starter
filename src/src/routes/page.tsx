import { Elysia } from 'elysia';

import { logger } from '~/utils/logger';

//import { getCount } from '~/services/statistics';

import MainLayout from '~/views/layouts/main';
import Experimental from '~/views/pages/home';

import ErrorMessage from '~/views/components/error-message';
import Home from "~/views/pages/home";
import {staticPlugin} from "@elysiajs/static";
import {Html} from "@elysiajs/html";

export const pageRouter = new Elysia()
  .onError(({ error, set }) => {
    logger.error(error);

    set.status = 200;
    return <ErrorMessage />;
  })
  .get('/', async () => {
    //const count = await getCount();

    return (
      <MainLayout>
        <Home/>
      </MainLayout>
    )
  })
