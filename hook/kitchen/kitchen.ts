import useSWR from 'swr';
import fetcher from '../../lib/tools/fetcher';

const useKitchen = () => {
  const { data, error } = useSWR(
    'https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink&access_token=IGQVJWQ0c2aU1ZAdk1EcUVQdUd6OHdhNnM0WlZAFenZAoOGtaV2hUQ1F2WHhpUk5FMWVhaFhabDZAMV3c2R3BBdGh4QlA2b1NxMHNScDBTQTc5V2lWNzd6S1NHOFF3SnpEczNGWFFkem1WczZA2ckVIdV9INwZDZD&limit=9',
    fetcher
  );
  return {
    kitchen: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useKitchen;
