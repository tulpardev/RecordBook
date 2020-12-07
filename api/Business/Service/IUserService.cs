using Entities.Concrete;
using System.Collections.Generic;

namespace Business.Abstract
{
    public interface IUserService
    {
        List<User> GetList();
        void Add(User User);
    }
}
