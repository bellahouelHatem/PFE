package Repositories;

import Model.Action;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ActionRepo extends JpaRepository<Action,Long> {
}
