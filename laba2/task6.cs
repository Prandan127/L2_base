using System;

public class Kata
{
    public static string ToWeirdCase(string s)
    {
        char[] chars = s.ToCharArray();
        int index = 0;
        
        for (int i = 0; i < chars.Length; i++)
        {
            if (chars[i] == ' ')
            {
                index = 0;
                continue;
            }
            
            if (index % 2 == 0)
                chars[i] = char.ToUpper(chars[i]);
            else
                chars[i] = char.ToLower(chars[i]);
                
            index++;
        }
        
        return new string(chars);
    }
}