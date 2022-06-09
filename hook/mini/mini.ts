import useSWR from 'swr';
import fetcher from '../../lib/tools/fetcher';

const useMini = () => {
  const { data, error } = useSWR(
    'https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink&access_token=IGQVJVZAEZA5X3RfUVhDRTBQR1ZAhVjJKd20tQS04b0NnYVNNZAm9udFBHUmswQzVib0llQmJkY21RZAmhGZAFV4cVFWQ2hRSWx0ZAkp3WlJWVzh5VHZAEUGxseXc3eVBKcnFhdlZANSjRsQ3l4Wm8yUFJQaC1HOQZDZD&limit=9',
    fetcher
  );
  return {
    mini: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useMini;
