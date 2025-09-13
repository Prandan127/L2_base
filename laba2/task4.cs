using System.Collections.Generic;

public class Kata
{
    public static int FindMissing(List<int> list)
    {
        int n = list.Count;
        int totalDiff = list[n - 1] - list[0];
        int step = totalDiff / n;
        
        for (int i = 0; i < n - 1; i++)
        {
            if (list[i + 1] - list[i] != step)
            {
                return list[i] + step;
            }
        }
        
        return list[0];
    }
}