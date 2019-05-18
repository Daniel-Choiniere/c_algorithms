
#include <stdio.h>
#include <cs50.h>

long long factor(long long num)
{
  long long counter = 1;

  for (int i=2; i<=num; i++)
  {
    counter *= i;
  }
  printf("%lli\n",counter);
  return counter;
}


int main(void)
{
    long long num;

    do
    {
        num = get_int("Number to factorialize: ");
    }
    while (num < 1);

    factor(num);
}


