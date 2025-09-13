using System;
using System.Text;

public class PrimeDecomp
{
    public static string factors(int lst)
    {
        StringBuilder result = new StringBuilder();
        int n = lst;
        
        for (int i = 2; i <= n; i++)
        {
            int count = 0;
            while (n % i == 0)
            {
                count++;
                n /= i;
            }
            
            if (count > 0)
            {
                if (count == 1)
                    result.Append($"({i})");
                else
                    result.Append($"({i}**{count})");
            }
        }
        
        return result.ToString();
    }
}