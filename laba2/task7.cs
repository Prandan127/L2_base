using System.Collections.Generic;

 public class Kata
 {
    public List<string> wave(string str)
    {
        List<string> result = new List<string>();
            
        for (int i = 0; i < str.Length; i++)
        {
            if (char.IsLetter(str[i]))
            {
                char[] chars = str.ToCharArray();
                chars[i] = char.ToUpper(chars[i]);
                result.Add(new string(chars));
            }
        }
       
        return result;
    }
}