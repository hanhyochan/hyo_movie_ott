import supabase from '../supabaseConfig';

export async function handleClick() {

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'kakao',
  });

  if (error) {
    console.error('Kakao login error:', error.message);
    return;
  }

  console.log('Kakao login data:', data);
}
