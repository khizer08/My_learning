import java.util.*;

public class test {
    public static String task(String s[]) {
        String prefix=s[0];
        for(int i=1;i<s.length;i++){
            boolean result=s[i].startsWith(prefix);
            if(result==false){
                prefix=prefix.
            }

        }
        return prefix;
    }

    public static void main(String args[]) {
        String s[] = {"flower","flow","flight"};
        System.out.println(task(s));
    }

}